import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomDropDown from '../component/customdropdown';

const CreateScreen = () => {
  const [value, setValue] = useState(null);
  const [to, setTo] = useState(null);

  console.log(value, '***');
  return (
    <View style={styles.createWrapper}>
      <View>
        <CustomDropDown
          value={value}
          setValue={setValue}
          items={[
            { label: 'GURAKHPUR_U114', value: 'U114' },
            { label: 'GURAKHPUR_U114', value: 'U114' },
            { label: 'GURAKHPUR_U114', value: 'U114' },
          ]}
        />
      </View>
      <View>
        <CustomDropDown
          value={to}
          setValue={setTo}
          items={[
            { label: 'GURAKHPUR_U114', value: 'U114' },
            { label: 'GURAKHPUR_U114', value: 'U114' },
            { label: 'GURAKHPUR_U114', value: 'U114' },
          ]}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  createWrapper:{
    margin:10
  },
});
