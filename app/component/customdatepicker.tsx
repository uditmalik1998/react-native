import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { View, StyleSheet } from 'react-native';

interface ICustomDatePicker {
  value: Date;
  onChange: (args: any) => void;
  onBlur: () => void;
}

const CustomDatePicker = (props:ICustomDatePicker) => {
  const {
    value = new Date(),
    onChange = () => {},
    onBlur = () => {}
  } = props;

  const handleDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
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
