import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.logoutContainer}>
      <View style={styles.logoutWrapper}>
        <View style={styles.details}>
          <Text style={styles.txt}>Are you Sure?</Text>
          <Text style={styles.txt}>You want to logout?</Text>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => navigation.navigate('Pending')}
          >
            <Text style={styles.logoutBtn}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => navigation.replace('Login')}
          >
            <Text style={styles.btn}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  logoutContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logoutWrapper: {
    elevation: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  txt: {
    fontSize: 24,
    color: '#36454F',
  },
  details: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  btnContainer: {
    alignSelf: 'center',
    padding: 10,
  },
  btn: {
    backgroundColor: '#D22B2B',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 20,
  },
  logoutBtn: {
    color: '#36454F',
    borderColor: '#36454F',
    borderWidth: 1.5,
    borderRadius: 20,
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 40,
    paddingVertical: 5,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 45,
  },
});
