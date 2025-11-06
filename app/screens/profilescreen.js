import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <View>
      <View style={styles.logoWrapper}>
        <Icon name="user-circle" color="#87CEEB" size={100} />
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Icon name="user" size={40} color="#000000" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Name</Text>
          <Text style={styles.name}>Udit Malik</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Icon name="user" size={40} color="#000000" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Emp Code</Text>
          <Text style={styles.name}>V2454</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Icon name="laptop" size={40} color="#000000" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Designation</Text>
          <Text style={styles.name}>Developer</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Entypo name="users" size={40} color="#000000" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Departement</Text>
          <Text style={styles.name}>IT</Text>
        </View>
      </View>
      <View style={styles.nameWrapper}>
        <View>
          <Material name="email" size={40} color="#000000" />
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
    paddingVertical: 10,
  },
  txtLabel: {
    fontSize: 22,
    fontWeight: '900',
    color: '#36454F',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
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
