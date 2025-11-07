import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ProfileScreen = () => {
  return (
    <View>
      <View style={styles.logoWrapper}>
        <Icon name="user-circle-o" color="#36454F" size={100} />
      </View>
      <View style={styles.nameWrapper}>
        <View style={styles.iconWrapper}>
          <Icon name="user-o" size={30} color="#D22B2B" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Name</Text>
          <Text style={styles.name}>Udit Malik</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View style={styles.iconWrapper}>
          <Entypo name="calculator" size={30} color="#D22B2B" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Emp Code</Text>
          <Text style={styles.name}>V2454</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View style={styles.iconWrapper}>
          <Icon name="laptop" size={30} color="#D22B2B" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Designation</Text>
          <Text style={styles.name}>Developer</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View style={styles.iconWrapper}>
          <Feather name="users" size={30} color="#D22B2B" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Departement</Text>
          <Text style={styles.name}>IT</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View style={styles.iconWrapper}>
          <Fontisto name="email" size={26} color="#D22B2B" />
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
    fontSize: 16,
    fontWeight: '700',
    color: '#36454F',
    letterSpacing: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#36454F',
  },
  details: {
    paddingHorizontal: 20,
  },
  logoWrapper: {
    alignSelf: 'center',
    padding: 20,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
  },
  iconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F5F9FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    elevation: 2,
  },
});
