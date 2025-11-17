import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { types, pick } from '@react-native-documents/picker';
import CreateForm from '../component/createform';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createTravelRequest } from '../api-manager/travel';

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
  assignedBy: () => string;
  budgetedAmount: string;
  fromDate: Date;
  locationFrom: () => string;
  locationTo: () => string;
  remarks: string;
  toDate: Date;
  travelMode: () => string;
  visitPurpose: () => number;
}

interface IIsDatePickershow {
  fromDate: boolean;
  toDate: boolean;
}

const CreateScreen = () => {
  const [dropdownData, setDropDownData] = useState<IDropDown>({
    fromDate: 'mm/dd/yyyy',
    toDate: 'mm/dd/yyyy',
  });
  const [isDatePickershow, setIsDatePickerShow] = useState<IIsDatePickershow>({
    fromDate: false,
    toDate: false,
  });

  const [dropDownItems, setDropDownItems] = useState<IDropDownItems>({
    locationFromItems: [],
    locationToItems: [],
    assignedToItems: [],
    visitPurposeItems: [],
    modeItems: [
      { label: 'Bus', value: 'bus' },
      { label: 'Car', value: 'car' },
    ],
  });
  const [imageUri, setImageUri] = useState({});

  const formatDate = (date: Date) => {
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
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
      console.log(response);
    } catch (err) {
      console.error('Error While Taking File', err);
    }
  };

  const handleSubmit = async (data: IHandleSubmit) => {
    const payload = new FormData();
    payload.append('PurposeCode', data.visitPurpose());
    payload.append('ModeOfTravel', data.travelMode());
    payload.append('LocationFromCode', data.locationFrom());
    payload.append('LocationToCode', data.locationTo());
    payload.append('VisitFromDate', data.fromDate);
    payload.append('VisitToDate', data.toDate);
    payload.append('VisitAssignedBy', data.assignedBy());
    payload.append('Remarks', data.remarks);
    payload.append('TotalAmount', data.budgetedAmount);

    await createTravelRequest(payload);

    console.log(payload, 'INDIA****');

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
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
