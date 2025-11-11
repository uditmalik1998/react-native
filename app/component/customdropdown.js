'use client';

import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const CustomDropDown = props => {
  const [open, setOpen] = useState(false);
  const {
    value = null,
    setValue = () => {},
    items = [],
    setItems = () => {},
    placeholder = 'Select an Item',
  } = props;
  return (
    <View style={styles.wrapper}>
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
      />
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 1000,
  },
  dropdown: {
    borderColor: '#E0E7FF',
    borderWidth: 1.5,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    minHeight: 56,
    paddingHorizontal: 16,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
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
  },
  tickIconStyle: {
    tintColor: '#6366F1',
  },
});
