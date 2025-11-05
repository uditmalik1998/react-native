import { FlatList, View } from 'react-native';
import Card from './card';

const CardList = (props) => {
  const {data = []} = props;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={item => {
          return(<Card data={item?.item} />);
        }}
        keyExtractor={(item, index) => item?.id?.toString()}
      />
    </View>
  );
};

export default CardList;
