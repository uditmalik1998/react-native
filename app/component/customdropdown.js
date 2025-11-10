import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { View } from 'react-native';

const CustomDropDown = props => {
  const [open, setOpen] = useState(false);
  const { value = null, setValue = () => {}, items = [] } = props;
  return (
    <View>
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        items={items}
        value={value}
        setValue={setValue}
      />
    </View>
  );
};

export default CustomDropDown;
