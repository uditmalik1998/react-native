import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { ImageStyle } from 'react-native';

interface ICustomElementDropDown {
  data: { label: string; value: string }[];
  search: boolean;
  value: {};
  onChange: (args: any) => void;
  labelField: string;
  valueField: string;
  placeholder: string;
  searchPlaceholder: string;
  onBlur: () => void;
}

const CustomElementDropDown = (props: ICustomElementDropDown) => {
  const {
    data = [],
    search = true,
    value = {},
    onChange = () => {},
    labelField = '',
    valueField = '',
    placeholder = 'Search',
    searchPlaceholder = 'Search',
    onBlur = () => {},
  } = props;
  return (
    <Dropdown
      data={data}
      search={search}
      value={value}
      onChange={onChange}
      labelField={labelField}
      valueField={valueField}
      placeholder={placeholder}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.textStyle}
      style={styles.dropdown}
      containerStyle={styles.dropdownContainer}
      iconStyle={styles.arrowIconStyle}
      itemTextStyle={styles.labelStyle}
      searchPlaceholderTextColor="#9CA3AF"
      searchPlaceholder={searchPlaceholder}
      onBlur={onBlur}
    />
  );
};

export default CustomElementDropDown;

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
});
