import DateTimePicker from "@react-native-community/datetimepicker"
import { View, StyleSheet } from "react-native"

const CustomDatePicker = (props) => {
  const { value = new Date(), onChange = () => {} } = props
  return (
    <View style={styles.datePickerWrapper}>
      <DateTimePicker display="default" mode="date" value={value} onChange={onChange} accentColor="#6366F1" />
    </View>
  )
}

export default CustomDatePicker

const styles = StyleSheet.create({
  datePickerWrapper: {
    marginTop: 8,
    zIndex:4000
  },
})
