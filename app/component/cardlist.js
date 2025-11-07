import { FlatList, ScrollView } from 'react-native';
import Card from './card';
import { SafeAreaView } from 'react-native-safe-area-context';

const CardList = props => {
  const { data = [] } = props;
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={item => {
            return <Card data={item?.item} />;
          }}
          keyExtractor={item => item?.id?.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardList;
