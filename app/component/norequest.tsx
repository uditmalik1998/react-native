import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface INoRequest {
  navigation: {
    navigate: (args: string) => void;
  };
  heading: string;
  subHeading: string;
  iconName:string;
}
const NoRequest = (props: INoRequest) => {
  const { navigation, heading = '', subHeading = '', iconName = "" } = props;

  return (
    <View style={styles.noRequestContainer}>
      <View style={styles.iconConatiner}>
        {iconName === 'pending-actions' ? (
          <MaterialIcons size={80} color="#36454F" name={iconName}/>
        ) : (
          <Ionicons size={80} color="#36454F" name={iconName} />
        )}
      </View>
      <View>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
        <TouchableOpacity
          style={styles.noRequestBtn}
          onPress={() => navigation.navigate('Create')}
        >
          <Text style={styles.btnTxt}>Create New Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoRequest;

const styles = StyleSheet.create({
  noRequestContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems:"center"
  },
  iconConatiner: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#36454F',
    textAlign: 'center',
    paddingBottom: 12,
  },
  subHeading: {
    color: '#626c71',
    fontSize: 14,
    paddingBottom: 24,
    textAlign: 'center',
    lineHeight: 22,
  },
  noRequestBtn: {
    backgroundColor: '#D22B2B',
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 25,
  },
  btnTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
