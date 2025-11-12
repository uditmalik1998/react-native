import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StyleSheet } from 'react-native';

const CustomDatePicker = props => {
  const {
    value = new Date(),
    onChange = () => {},
    onBlur = () => {},
    handleDate = () => {},
  } = props;
  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'dismissed') return;
    const currentDate = selectedDate || value;
    onChange(currentDate); 
  };
  return (
    <View style={styles.datePickerWrapper}>
      <DateTimePicker
        display="default"
        mode="date"
        value={value instanceof Date ? value : new Date(value)}
        onChange={handleDateChange}
        onBlur={onBlur}
        accentColor="#6366F1"
      />
    </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  datePickerWrapper: {
    marginTop: 8,
    zIndex: 4000,
  },
});
