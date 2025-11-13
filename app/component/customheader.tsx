import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ICustomHeader {
  heading: string;
  iconName: string;
}
const CustomHeader = (props: ICustomHeader) => {
  const { heading = '', iconName = '' } = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconWrapper}>
        {heading === 'Profile' ? (
          <FontIcon name={iconName} size={24} color="#FFFFFF" />
        ) : heading === 'Create Request' ? (
          <Ionicons size={24} name={iconName} color="#FFFFFF" />
        ) : (
          <Icon name={iconName} size={24} color="#FFFFFF" />
        )}
      </View>
      <View>
        <Text style={styles.headerText}>{heading}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#D22B2B',
    padding: 8,
    borderRadius: 5,
  },
  headerText: {
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: '600',
    color: '#36454F',
  },
});
