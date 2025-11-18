import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { StyleSheet, ImageStyle } from 'react-native';

interface ICustomDropDown {
  value: string | null;
  setValue: () => void;
  items: any;
  setItems: (val: any) => void;
  placeholder: string;
  onBlur: () => void;
  labelText: string;
  valueText: string;
}

const CustomDropDown = (props: ICustomDropDown) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    value = null,
    setValue = () => {},
    items = [],
    setItems = () => {},
    placeholder = 'Select an Item',
    onBlur = () => {},
    labelText = 'label',
    valueText = 'value',
  } = props;
  return (
    <>
      <DropDownPicker
        placeholder={placeholder}
        open={open}
        setOpen={setOpen}
        items={items}
        value={value}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        placeholderStyle={styles.placeholderStyle}
        textStyle={styles.textStyle}
        labelStyle={styles.labelStyle}
        arrowIconStyle={styles.arrowIconStyle}
        tickIconStyle={styles.tickIconStyle}
        searchTextInputStyle={styles.searchTxt}
        searchPlaceholderTextColor={'#9CA3AF'}
        onClose={onBlur}
        // schema={{
        //   label: labelText,
        //   value: valueText,
        // }}
        searchable={true}
        searchPlaceholder="Search..."
        listMode="FLATLIST"
        // maxHeight={260}
        // flatListProps={{
        //   initialNumToRender: 20,
        //   maxToRenderPerBatch: 20,
        //   windowSize: 10,
        //   keyboardShouldPersistTaps: 'handled',
        // }}
      />
    </>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  dropdown: {
    borderColor: '#E0E7FF',
    borderWidth: 1.5,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    minHeight: 56,
    paddingHorizontal: 16,
    shadowColor: '#D22B2B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  dropdownContainer: {
    borderColor: '#E0E7FF',
    borderWidth: 1.5,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 9999,
  },
  placeholderStyle: {
    color: '#9CA3AF',
    fontSize: 15,
    fontWeight: '400',
  },
  textStyle: {
    color: '#1F2937',
    fontSize: 15,
    fontWeight: '500',
  },
  labelStyle: {
    color: '#1F2937',
    fontSize: 15,
    fontWeight: '500',
  },
  arrowIconStyle: {
    tintColor: '#6366F1',
  } as ImageStyle,
  tickIconStyle: {
    tintColor: '#6366F1',
  } as ImageStyle,
  searchTxt: {
    borderColor: '#9CA3AF',
  },
});
