import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';

interface ILoader {
  size: 'small' | 'large' | number;
  color: string;
  styles?: StyleProp<ViewStyle>;
}
const Loader = (props: ILoader) => {
  const { size = 'small', color = '#FFFFFF', styles = '' } = props;
  return (
    <View style={styles}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
