import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { types, pick } from '@react-native-documents/picker';
import CreateForm from '../component/createform';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createTravelRequest } from '../api-manager/travel';
import { getItem } from '../utils/AsyncStorage';

interface IDropDown {
  fromDate: string;
  toDate: string;
}

interface IDropDownItems {
  locationFromItems: [];
  locationToItems: [];
  assignedToItems: [];
  visitPurposeItems: [];
  modeItems: { label: string; value: string }[];
}

export interface IHandleSubmit {
  assignedBy: { code: string; empName: string };
  budgetedAmount: string;
  fromDate: Date;
  locationFrom: { code: string; storeName: string };
  locationTo: { code: string; storeName: string };
  remarks: string;
  toDate: Date;
  travelMode: { label: string; value: string };
  visitPurpose: { code: number; purposeName: string };
}

interface IIsDatePickershow {
  fromDate: boolean;
  toDate: boolean;
}

interface ICreateScreen {
  navigation: { navigate: (args: string) => void };
}

const CreateScreen = ({ navigation }: ICreateScreen) => {
  const [dropdownData, setDropDownData] = useState<IDropDown>({
    fromDate: 'day month year',
    toDate: 'day month year',
  });
  const [isDatePickershow, setIsDatePickerShow] = useState<IIsDatePickershow>({
    fromDate: false,
    toDate: false,
  });
  const [isLoading, setLoading] = useState<boolean>(false);

  const [dropDownItems, setDropDownItems] = useState<IDropDownItems>({
    locationFromItems: [],
    locationToItems: [],
    assignedToItems: [],
    visitPurposeItems: [],
    modeItems: [
      { label: 'Flight', value: 'flight' },
      { label: 'Train', value: 'train' },
      { label: 'Bus', value: 'bus' },
      { label: 'Car', value: 'car' },
      { label: 'Other', value: 'other' },
    ],
  });
  const [imageUri, setImageUri] = useState({});
  const [apiError, setApiError] = useState<string>('');

  const formatDate = (date: Date) => {
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const handleFromDate = (fromData: Date) => {
    setDropDownData(prev => ({ ...prev, fromDate: formatDate(fromData) }));
    setIsDatePickerShow(prev => ({ ...prev, fromDate: false }));
  };

  const handleToDate = (toDate: Date) => {
    setDropDownData(prev => ({ ...prev, toDate: formatDate(toDate) }));
    setIsDatePickerShow(prev => ({ ...prev, toDate: false }));
  };

  const handleDocumentSelection = async () => {
    try {
      const response = await pick({
        type: [types.images],
        allowMultiSelection: false,
      });
      setImageUri(response?.[0]);
    } catch (err) {
      console.error('Error While Taking File', err);
    }
  };

  const handleSubmit = async (data: IHandleSubmit) => {
    setLoading(true);
    const fromDateString = data.fromDate.toISOString();
    const toDateString = data.toDate.toISOString();
    const empCode = await getItem('employeeCode');

    const payload = new FormData();
    payload.append('MainFiles', imageUri);
    payload.append('PurposeCode', data.visitPurpose?.code);
    payload.append('ModeOfTravel', data.travelMode?.value);
    payload.append('LocationFromCode', data.locationFrom?.code);
    payload.append('LocationToCode', data.locationTo?.code);
    payload.append('VisitFromDate', fromDateString);
    payload.append('VisitToDate', toDateString);
    payload.append('VisitAssignedBy', data.assignedBy?.code);
    payload.append('Remarks', data.remarks || '');
    payload.append('TotalAmount', data.budgetedAmount);
    payload.append('EmployeeCode', empCode);

    try {
      const response: any = await createTravelRequest(payload);
      if (response.ok) {
        setApiError('');
        setLoading(false);
        navigation.navigate('Pending');
      } else {
        const json = await response.json();
        if (json.message) {
          setApiError(json.message);
        } else if (json?.title) {
          setApiError(json.title);
        } else {
          setApiError('Something went wrong!');
        }
        setLoading(false);
      }
    } catch (err) {
      console.error('Error while fetching...', err);
      setApiError('Something went wrong!');
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
      >
        <View style={styles.createWrapper}>
          <CreateForm
            dropdownData={dropdownData}
            isDatePickershow={isDatePickershow}
            setIsDatePickerShow={setIsDatePickerShow}
            dropDownItems={dropDownItems}
            setDropDownItems={setDropDownItems}
            handleFromDate={handleFromDate}
            handleToDate={handleToDate}
            handleDocumentSelection={handleDocumentSelection}
            handleSubmitForm={handleSubmit}
            apiError={apiError}
            isLoading={isLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    flex: 1,
  },
  createWrapper: {
    paddingHorizontal: 20,
  },
});
