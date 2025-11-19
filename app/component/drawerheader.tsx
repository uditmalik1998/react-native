import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from './customheader';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IDrawerHeader {
  heading: string;
  iconName: string;
}

const DrawerHeader = (props: IDrawerHeader) => {
  const { heading = '', iconName = '' } = props;
  const navigation: { openDrawer: () => void } = useNavigation();
  return (
    <SafeAreaView style={styles.TabBarWrapper}>
      <View style={styles.menuWrapper}>
        <Icon
          size={24}
          color="#FFFFFF"
          name={iconName}
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <CustomHeader heading={heading} iconName={iconName} isIconShow={false} />
    </SafeAreaView>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  TabBarWrapper: {
    paddingLeft:18,
    flexDirection: 'row',
    backgroundColor:"#FFFFFF",
  },
  menuWrapper: {
    backgroundColor: '#D22B2B',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
});
