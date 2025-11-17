import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useLayoutEffect, useState } from 'react';
import { getItem } from '../utils/AsyncStorage';

interface IData {
  name: string;
  empcode: string;
  email: string;
  designation: string;
  department: string;
}

const ProfileScreen = () => {
  const [data, setData] = useState<IData>({
    name: '',
    empcode: '',
    email: '',
    designation: '',
    department: '',
  });

  useLayoutEffect(() => {
    const setProfileData = async () => {
      const name = await getItem('name');
      const empcode = await getItem('employeeCode');
      const email = await getItem('email');
      const designation = await getItem('designation');
      const department = await getItem('department');

      setData({ name, empcode, email, designation, department });
    };
    setProfileData();
  }, []);

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
        <View>
          <Icon name="user-o" size={30} color="#D22B2B" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Name</Text>
          <Text style={styles.name}>{data?.name}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View>
          <Entypo name="calculator" size={30} color="#D22B2B" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Emp Code</Text>
          <Text style={styles.name}>{data?.empcode}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View>
          <Icon name="laptop" size={30} color="#D22B2B" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Designation</Text>
          <Text style={styles.name}>{data?.designation}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View>
          <Feather name="users" size={30} color="#D22B2B" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Departement</Text>
          <Text style={styles.name}>{data?.designation}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View>
          <Fontisto name="email" size={26} color="#D22B2B" />
        </View>
        <View style={styles.details}>
          <Text style={styles.txtLabel}>Email</Text>
          <Text style={styles.name}>{data?.email}</Text>
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
    marginBottom: 30,
    backgroundColor: '#FFF',
    borderRadius: 70,
  },
  logoIcon: {
    alignSelf: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 22,
    marginVertical: 10,
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
    color: '#36454F',
  },
  details: {
    flex: 1,
    paddingLeft: 20,
  },
});
