import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ProfileScreen = () => {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.logoWrapper}>
        <Icon name="user-circle-o" color="#36454F" size={100} />
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Icon name="user-o" size={40} color="#36454F" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Name</Text>
          <Text style={styles.name}>Udit Malik</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Entypo name="calculator" size={40} color="#36454F" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Emp Code</Text>
          <Text style={styles.name}>V2454</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Icon name="laptop" size={40} color="#36454F" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Designation</Text>
          <Text style={styles.name}>Developer</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Feather name="users" size={40} color="#36454F" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Departement</Text>
          <Text style={styles.name}>IT</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Fontisto name="email" size={40} color="#36454F" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Email</Text>
          <Text style={styles.name}>udit@gmalik.com</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileWrapper: {
    flex: 1,
    backgroundColor: '#E4ECF8',
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 10,
  },
  txtLabel: {
    fontSize: 22,
    fontWeight: '900',
    color: '#36454F',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#36454F',
  },
  details: {
    paddingHorizontal: 20,
  },
  logoWrapper: {
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 25,
  },
});
