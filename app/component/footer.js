import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const [isActive, setIsActive] = useState({
    active: false,
    profile: false,
    completed: false,
    logout: false,
  });
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() =>
            setIsActive({
              active: true,
              profile: false,
              completed: false,
              logout: false,
            })
          }
        >
          <Icon
            name="checkbox-passive"
            size={20}
            color={isActive.active ? '#FFFFFF' : '#000000'}
          />
          <Text style={isActive.active ? styles.whitetxt : styles.txt}>
            Active
          </Text>
        </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() =>
          setIsActive({
            active: false,
            profile: true,
            completed: false,
            logout: false,
          })
        }
      >
        <PersonIcon
          name="person-sharp"
          size={22}
          color={isActive.profile ? '#FFFFFF' : '#000000'}
        />
        <Text style={isActive.profile ? styles.whitetxt : styles.txt}>
          Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => {
          setIsActive({
            active: false,
            profile: false,
            completed: true,
            logout: false,
          });
          navigation.navigate('Home');
        }}
      >
        <MaterialIcon
          name="sticky-note-2"
          size={22}
          color={isActive.completed ? '#FFFFFF' : '#000000'}
        />
        <Text style={isActive.completed ? styles.whitetxt : styles.txt}>
          Completed
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() =>
          setIsActive({
            active: false,
            profile: false,
            completed: false,
            logout: true,
          })
        }
      >
        <MaterialIcon
          name="logout"
          size={22}
          color={isActive.logout ? '#FFFFFF' : '#000000'}
        />
        <Text style={isActive.logout ? styles.whitetxt : styles.txt}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#D22B2B',
    padding: 10,
  },
  iconWrapper: {
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#000000',
    display: 'none',
    paddingTop: 2,
    fontWeight: 'bold',
  },
  whitetxt: {
    paddingTop: 2,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
