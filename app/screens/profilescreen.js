import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Icon
          name="user-circle-o"
          color="#36454F"
          size={100}
          style={styles.logoIcon}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Icon name="user-o" size={30} color="#5A9BF6" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Name</Text>
          <Text style={styles.name}>Udit Malik</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Entypo name="calculator" size={30} color="#F77676" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Emp Code</Text>
          <Text style={styles.name}>V2454</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Icon name="laptop" size={30} color="#F8B76A" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Designation</Text>
          <Text style={styles.name}>Developer</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Feather name="users" size={30} color="#67C587" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Departement</Text>
          <Text style={styles.name}>IT</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Fontisto name="email" size={26} color="#B67CF7" />
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
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(180deg, #E3F0FF 0%, #EBF5FB 100%)',
    paddingTop: 20,
  },
  logoWrapper: {
    alignSelf: 'center',
    marginBottom: 25,
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 60,
    elevation: 6,
    shadowColor: '#A6DCEF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },
  logoIcon: {
    alignSelf: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 22,
    marginVertical: 13,
    paddingVertical: 18,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    borderRadius: 16,
    elevation: 12,
    shadowColor: '#CDF0EA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F5F9FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    elevation: 2,
  },
  txtLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#36454F',
    marginBottom: 3,
    letterSpacing: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6A7B8C',
  },
  details: {
    flex: 1,
  },
});
