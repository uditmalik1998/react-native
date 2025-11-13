import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from './customheader';
import { useNavigation } from '@react-navigation/native';

interface ITabBarHeader {
  heading: string;
  iconName: string;
}

const TabBarHeader = (props: ITabBarHeader) => {
  const { heading = '', iconName = '' } = props;
  const navigation: { openDrawer: () => void } = useNavigation();
  return (
    <View style={styles.TabBarWrapper}>
      <View style={styles.menuWrapper}>
        <Icon
          size={24}
          color="#FFFFFF"
          name="menu"
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <CustomHeader heading={heading} iconName={iconName} />
    </View>
  );
};

export default TabBarHeader;

const styles = StyleSheet.create({
  TabBarWrapper: {
    flexDirection: 'row',
  },
  menuWrapper: {
    backgroundColor: '#D22B2B',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
});
