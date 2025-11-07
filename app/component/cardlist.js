import { FlatList } from 'react-native';
import Card from './card';
import { useState } from 'react';

const CardList = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { data = [] } = props;
  return (
    <FlatList
      data={data}
      renderItem={item => {
        return <Card data={item?.item} setIsOpen={setIsOpen} isOpen={isOpen} />;
      }}
      keyExtractor={item => item?.id?.toString()}
    />
  );
};

export default CardList;
