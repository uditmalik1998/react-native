'use client';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import CustomDropDown from './customdropdown';
import CustomDatePicker from './customdatepicker';

const CreateForm = props => {
  const {
    dropdownData = {},
    setDropDownData = () => {},
    isDatePickershow = {},
    setIsDatePickerShow = () => {},
    dropDownItems = {},
    setDropDownItems = () => {},
    handleFromDate = () => {},
    handleToDate = () => {},
    handleDocumentSelection = () => {},
    handleSubmit = () => {},
  } = props;

  return (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>Travel Details</Text>

      <View
        style={[styles.dropdownContainer, { zIndex: 2000, elevation: 2000 }]}
      >
        <Text style={styles.label}>Location From</Text>
        <CustomDropDown
          value={dropdownData.locationFrom}
          setValue={val => {
            setDropDownData(prev => ({ ...prev, locationFrom: val() }));
          }}
          items={dropDownItems.locationFromItems}
          setItems={newItems =>
            setDropDownItems(prev => ({
              ...prev,
              locationFromItems: newItems,
            }))
          }
          placeholder="Select Location From"
        />
      </View>

      <View
        style={[styles.dropdownContainer, { zIndex: 1000, elevation: 1000 }]}
      >
        <Text style={styles.label}>Location To</Text>
        <CustomDropDown
          value={dropdownData.locationTo}
          setValue={val =>
            setDropDownData(prev => ({ ...prev, locationTo: val() }))
          }
          items={dropDownItems.locationToItems}
          setItems={newItems =>
            setDropDownItems(prev => ({
              ...prev,
              locationFromItems: newItems,
            }))
          }
          placeholder="Select Location To"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Budgeted Amount</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.currencySymbol}>₹</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter amount"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={dropdownData.budgetedAmount}
            onChangeText={val =>
              setDropDownData(prev => ({ ...prev, budgetedAmount: val }))
            }
          />
        </View>
      </View>

      <View style={styles.dateSection}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>From Date</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() =>
              setIsDatePickerShow(prev => ({ ...prev, fromDate: true }))
            }
          >
            <Text style={styles.calendarIcon}>📅</Text>
            <Text style={styles.dateText}>{dropdownData.fromDate}</Text>
          </TouchableOpacity>
          {isDatePickershow.fromDate && (
            <CustomDatePicker value={new Date()} onChange={handleFromDate} />
          )}
        </View>
        
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>To Date</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() =>
              setIsDatePickerShow(prev => ({ ...prev, toDate: true }))
            }
          >
            <Text style={styles.calendarIcon}>📅</Text>
            <Text style={styles.dateText}>{dropdownData.toDate}</Text>
          </TouchableOpacity>
          {isDatePickershow.toDate && (
            <CustomDatePicker value={new Date()} onChange={handleToDate} />
          )}
        </View>
      </View>

      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>Assignment Details</Text>

      <View
        style={[styles.dropdownContainer, { zIndex: 1000, elevation: 1000 }]}
      >
        <Text style={styles.label}>Assigned By</Text>
        <CustomDropDown
          value={dropdownData.assignedBy}
          setValue={val =>
            setDropDownData(prev => ({ ...prev, assignedBy: val() }))
          }
          items={dropDownItems.assignedToItems}
          setItems={newItems =>
            setDropDownItems(prev => ({
              ...prev,
              assignedToItems: newItems,
            }))
          }
          placeholder="Select Assigned By"
        />
      </View>

      <View style={[styles.dropdownContainer, { zIndex: 999, elevation: 999 }]}>
        <Text style={styles.label}>Visit Purpose</Text>
        <CustomDropDown
          value={dropdownData.visitPurpose}
          setValue={val =>
            setDropDownData(prev => ({ ...prev, visitPurpose: val() }))
          }
          items={dropDownItems.visitPurposeItems}
          setItems={newItems =>
            setDropDownItems(prev => ({
              ...prev,
              visitPurposeItems: newItems,
            }))
          }
          placeholder="Select Visit Purpose"
        />
      </View>

      <View style={[styles.dropdownContainer, { zIndex: 998, elevation: 998 }]}>
        <Text style={styles.label}>Mode of Travel</Text>
        <CustomDropDown
          value={dropdownData.travelMode}
          setValue={val =>
            setDropDownData(prev => ({ ...prev, travelMode: val() }))
          }
          items={dropDownItems.modeItems}
          setItems={newItems =>
            setDropDownItems(prev => ({ ...prev, modeItems: newItems }))
          }
          placeholder="Select Travel Mode"
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Remarks</Text>
        <TextInput
          style={styles.remarksInput}
          value={dropdownData.remarks}
          onChangeText={text =>
            setDropDownData(prev => ({ ...prev, remarks: text }))
          }
          multiline={true}
          maxLength={200}
          placeholder="Enter your remarks here..."
          placeholderTextColor="#9CA3AF"
          textAlignVertical="top"
          scrollEnabled={true}
        />
        <Text style={styles.characterCount}>
          {dropdownData.remarks.length}/200
        </Text>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Attachments</Text>
        <TouchableOpacity
          style={styles.fileButton}
          onPress={handleDocumentSelection}
        >
          <Text style={styles.fileIcon}>📎</Text>
          <Text style={styles.fileButtonText}>Choose Files</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Travel Request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateForm;

const styles = StyleSheet.create({
  formContainer: {
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
    marginTop: 8,
    letterSpacing: 0.3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E0E7FF',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    minHeight: 56,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6366F1',
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#1F2937',
    padding: 0,
  },
  dateSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E0E7FF',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    minHeight: 56,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  calendarIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  dateText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1F2937'
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 24,
  },
  remarksInput: {
    borderWidth: 1.5,
    borderColor: '#E0E7FF',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    padding: 16,
    minHeight: 120,
    fontSize: 15,
    fontWeight: '400',
    color: '#1F2937',
    textAlignVertical: 'top',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  characterCount: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'right',
    marginTop: 6,
    fontWeight: '500',
  },
  fileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#C7D2FE',
    borderRadius: 12,
    backgroundColor: '#F5F7FF',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  fileIcon: {
    fontSize: 22,
    marginRight: 10,
  },
  fileButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6366F1',
    letterSpacing: 0.3,
  },
  submitButton: {
    backgroundColor: '#6366F1',
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});
