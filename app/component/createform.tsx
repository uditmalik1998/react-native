import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import CustomDropDown from './customdropdown';
import CustomDatePicker from './customdatepicker';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import { getAllEmployee } from '../api-manager/travel';
import { getAllVisitPurpose } from '../api-manager/visitpurpose';
import { storeLocation } from '../api-manager/storelocation';
import { IHandleSubmit } from '../screens/createscreen';

interface ICreateForm {
  dropdownData: { fromDate: string; toDate: string };
  isDatePickershow: { fromDate: boolean; toDate: boolean };
  setIsDatePickerShow: ({}: any) => void;
  dropDownItems: {
    locationFromItems: [];
    locationToItems: [];
    visitPurposeItems: [];
    modeItems: { label: string; value: string }[];
  };
  setDropDownItems: ({}: any) => void;
  handleFromDate: (fromData: Date) => void;
  handleToDate: (toDate: Date) => void;
  handleDocumentSelection: () => void;
  handleSubmitForm: ({}: IHandleSubmit) => void;
  apiError: string;
}

const CreateForm = (props: ICreateForm) => {
  const assignedByRef = useRef([]);
  const {
    dropdownData = { fromDate: '', toDate: '' },
    isDatePickershow = { fromDate: false, toDate: false },
    setIsDatePickerShow = () => {},
    dropDownItems = {
      locationFromItems: [],
      locationToItems: [],
      visitPurposeItems: [],
      modeItems: [],
    },
    setDropDownItems = () => {},
    handleFromDate = () => {},
    handleToDate = () => {},
    handleDocumentSelection = () => {},
    handleSubmitForm = () => {},
    apiError = '',
  } = props;

  useEffect(() => {
    (async function () {
      try {
        const assignedTo = await getAllEmployee();
        const visitPurpose = await getAllVisitPurpose();
        const location = await storeLocation();
        assignedByRef.current = assignedTo;

        setDropDownItems((prev: any) => ({
          ...prev,
          visitPurposeItems: visitPurpose,
          locationFromItems: location,
          locationToItems: location,
        }));
      } catch (err) {
        console.error('Get Employee Error', err);
      }
    })();
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    control,
  }: any = useForm();

  return (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>Travel Details</Text>

      <Text style={styles.label}>Location From</Text>
      <Controller
        control={control}
        name="locationFrom"
        rules={{ required: 'Please select the location From' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomDropDown
            value={value}
            setValue={onChange}
            onBlur={onBlur}
            items={dropDownItems.locationFromItems}
            setItems={(newItems: any) =>
              setDropDownItems((prev: any) => ({
                ...prev,
                locationFromItems: newItems,
              }))
            }
            placeholder="Select Location From"
            labelText="storeName"
            valueText="code"
            listMode="SCROLLVIEW"
          />
        )}
      />
      {errors.locationFrom && (
        <Text style={styles.error}>{errors.locationFrom.message}</Text>
      )}
      <View style={styles.dropdownContainer}></View>

      <Text style={styles.label}>Location To</Text>
      <Controller
        control={control}
        name="locationTo"
        rules={{ required: 'Please Select Location To' }}
        render={({ field: { onBlur, onChange, value } }) => (
          <CustomDropDown
            value={value}
            setValue={onChange}
            onBlur={onBlur}
            items={dropDownItems.locationToItems}
            setItems={(newItems: any) =>
              setDropDownItems((prev: any) => ({
                ...prev,
                locationToItems: newItems,
              }))
            }
            placeholder="Select Location To"
            labelText="storeName"
            valueText="code"
            listMode="SCROLLVIEW"
          />
        )}
      />
      {errors.locationTo && (
        <Text style={styles.error}>{errors.locationTo.message}</Text>
      )}
      <View style={styles.dropdownContainer}></View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Budgeted Amount</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.currencySymbol}>₹</Text>
          <Controller
            control={control}
            name="budgetedAmount"
            rules={{ required: 'Budgeted Amount is required' }}
            render={({ field: { value, onChange, onBlur } }) => {
              return (
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter amount"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </View>
        {errors.budgetedAmount && (
          <Text style={styles.error}>{errors.budgetedAmount.message}</Text>
        )}
      </View>

      <View style={styles.dateSection}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>From Date</Text>

          <TouchableOpacity
            style={styles.dateButton}
            onPress={() =>
              setIsDatePickerShow((prev: any) => ({ ...prev, fromDate: true }))
            }
          >
            <Text style={styles.calendarIcon}>📅</Text>
            <Text style={styles.dateText}>{dropdownData.fromDate}</Text>
          </TouchableOpacity>

          <Controller
            name="fromDate"
            control={control}
            rules={{
              required: 'Please select From Date',
              validate: value =>
                value instanceof Date || 'Please select a valid To Date',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                {isDatePickershow.fromDate && (
                  <CustomDatePicker
                    value={value || new Date()}
                    onChange={(selectedDate: Date) => {
                      onChange(selectedDate);
                      handleFromDate(selectedDate);
                    }}
                    onBlur={onBlur}
                  />
                )}
                {errors.fromDate && (
                  <Text style={styles.error}>{errors.fromDate.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>To Date</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() =>
              setIsDatePickerShow((prev: any) => ({ ...prev, toDate: true }))
            }
          >
            <Text style={styles.calendarIcon}>📅</Text>
            <Text style={styles.dateText}>
              {dropdownData.toDate || 'mm/dd/yyyy'}
            </Text>
          </TouchableOpacity>

          <Controller
            name="toDate"
            control={control}
            rules={{
              required: 'Please select To Date',
              validate: value =>
                value instanceof Date || 'Please select a valid To Date',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                {isDatePickershow.toDate && (
                  <CustomDatePicker
                    value={value || new Date()}
                    onChange={(selectedDate: Date) => {
                      onChange(selectedDate);
                      handleToDate(selectedDate);
                    }}
                    onBlur={onBlur}
                  />
                )}
                {errors.toDate && (
                  <Text style={styles.error}>{errors.toDate.message}</Text>
                )}
              </>
            )}
          />
        </View>
      </View>

      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>Assignment Details</Text>

      <Text style={styles.label}>Assigned By</Text>
      <Controller
        name="assignedBy"
        control={control}
        rules={{ required: 'Please Enter Assigned By' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomDropDown
            value={value}
            setValue={onChange}
            items={assignedByRef.current}
            onBlur={onBlur}
            setItems={(newItems: any) => {
              assignedByRef.current = newItems;
            }}
            placeholder="Select Assigned By"
            labelText="empName"
            valueText="code"
            listMode="MODAL"
          />
        )}
      />
      {errors.assignedBy && (
        <Text style={styles.error}>{errors.assignedBy.message}</Text>
      )}
      <View style={styles.dropdownContainer}></View>

      <Text style={styles.label}>Visit Purpose</Text>
      <Controller
        name="visitPurpose"
        control={control}
        rules={{ required: 'Please Enter Visit Purpose' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomDropDown
            value={value}
            setValue={onChange}
            onBlur={onBlur}
            items={dropDownItems.visitPurposeItems}
            setItems={(newItems: any) =>
              setDropDownItems((prev: any) => ({
                ...prev,
                visitPurposeItems: newItems,
              }))
            }
            placeholder="Select Visit Purpose"
            labelText="purposeName"
            valueText="code"
            listMode="SCROLLVIEW"
          />
        )}
      />
      {errors.visitPurpose && (
        <Text style={styles.error}>{errors.visitPurpose.message}</Text>
      )}
      <View style={styles.dropdownContainer}></View>

      <Text style={styles.label}>Mode of Travel</Text>
      <Controller
        name="travelMode"
        control={control}
        rules={{ required: 'Please Enter Travel Mode' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomDropDown
            value={value}
            setValue={onChange}
            onBlur={onBlur}
            items={dropDownItems.modeItems}
            setItems={(newItems: any) =>
              setDropDownItems((prev: any) => ({
                ...prev,
                modeItems: newItems,
              }))
            }
            placeholder="Select Travel Mode"
            labelText="label"
            valueText="value"
            listMode="SCROLLVIEW"
          />
        )}
      />
      {errors.travelMode && (
        <Text style={styles.error}>{errors.travelMode.message}</Text>
      )}
      <View style={styles.dropdownContainer}></View>

      <View style={styles.divider} />

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Remarks</Text>
        <Controller
          control={control}
          name="remarks"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <>
                <TextInput
                  style={styles.remarksInput}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  multiline={true}
                  maxLength={200}
                  placeholder="Enter your remarks here..."
                  placeholderTextColor="#9CA3AF"
                  textAlignVertical="top"
                  scrollEnabled={true}
                />
              </>
            );
          }}
        />
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
      {apiError && <Text style={styles.error}>{apiError}</Text>}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(handleSubmitForm)}
      >
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
    shadowColor: '#D22B2B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: '600',
    color: '#D22B2B',
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
    shadowColor: '#D22B2B',
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
    color: '#1F2937',
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
    shadowColor: '#D22B2B',
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
    borderColor: 'rgb(243, 186, 186)',
    borderRadius: 12,
    backgroundColor: 'rgb(250, 243, 243)',
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
    color: '#D22B2B',
    letterSpacing: 0.3,
  },
  submitButton: {
    backgroundColor: '#D22B2B',
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
  error: {
    color: '#D22B2B',
    paddingTop: 5,
  },
});
