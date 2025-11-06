import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Logout = () => {
  return (
    <View style={styles.logoutContainer}>
      <View style={styles.details}>
        <Text style={styles.txt}>Are you Sure?</Text>
        <Text style={styles.txt}>You want to logout?</Text>
      </View>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btn}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  logoutContainer:{
    flex:1,
    justifyContent:"center"
  },
  txt: {
    fontSize: 24,
  },
  details: {
    alignItems: 'center',
  },
  btnContainer: {
    alignSelf: 'center',
    padding:10
  },
  btn: {
    backgroundColor: '#D22B2B',
    color: '#FFFFFF',
    fontSize: 18,
    paddingHorizontal:40,
    paddingVertical:5,
    borderRadius:20
  },
});
