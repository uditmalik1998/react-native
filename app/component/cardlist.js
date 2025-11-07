import { FlatList } from 'react-native';
import Card from './card';

const CardList = props => {
  const { data = [] } = props;
  return (
      <FlatList
        data={data}
        renderItem={item => {
          return <Card data={item?.item} />;
        }}
        keyExtractor={item => item?.id?.toString()}
      />
  );
};

export default CardList;
