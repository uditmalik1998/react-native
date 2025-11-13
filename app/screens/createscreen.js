import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { types, pick } from '@react-native-documents/picker';
import CreateForm from '../component/createform';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateScreen = () => {
  const [dropdownData, setDropDownData] = useState({
    fromDate: 'mm/dd/yyyy',
    toDate: 'mm/dd/yyyy',

  });
  const [isDatePickershow, setIsDatePickerShow] = useState({
    fromDate: false,
    toDate: false,
  });

  const [dropDownItems, setDropDownItems] = useState({
    locationFromItems: [
      { label: 'GURAKHPUR_U114', value: 'U114' },
      { label: 'GURAKHPUR_U115', value: 'U115' },
      { label: 'GURAKHPUR_U116', value: 'U116' },
    ],
    locationToItems: [
      { label: 'GURAKHPUR_U114', value: 'U114' },
      { label: 'GURAKHPUR_U115', value: 'U115' },
      { label: 'GURAKHPUR_U116', value: 'U116' },
    ],
    assignedToItems: [{ label: 'NIKHIL VIG', value: 'U114' }],
    visitPurposeItems: [
      { label: 'IT Work', value: 'it work' },
      { label: 'Other Work', value: 'other work' },
    ],
    modeItems: [
      { label: 'Bus', value: 'bus' },
      { label: 'Car', value: 'car' },
    ],
  });
  const [imageUri, setImageUri] = useState({});
  const formatDate = date => {
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  const handleFromDate = (fromData) => {
    setDropDownData(prev => ({ ...prev, fromDate: formatDate(fromData) }));
    setIsDatePickerShow(prev => ({ ...prev, fromDate: false }));
  };

  const handleToDate = (toDate) => {
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

  const handleSubmit = (data) => {
    console.log(formatDate(data.fromDate),formatDate(data.toDate), 'INDIA****');
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
            style={{ zIndex: 2001 }}
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
