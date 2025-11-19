import { FlatList } from 'react-native';
import Card from './card';

interface ICardList {
  type: string;
  data: {
    id: number;
    visitFromDate: string;
    visitToDate: string;
    visitAssignedByNavigation: { empName: string };
    locationFromCodeNavigation: { storeName: string };
    locationToCodeNavigation: { storeName: string };
    purposeCodeNavigation: { purposeName: string };
  }[];
}

const CardList = (props: ICardList) => {
  const { data = [], type = '' } = props;
  return (
    <FlatList
      data={data}
      renderItem={(item: any) => {
        return (
          <Card
            from={item?.item?.locationFromCodeNavigation?.storeName}
            to={item?.item?.locationToCodeNavigation?.storeName}
            type={type}
            assignedby={item?.item?.visitAssignedByNavigation?.empName}
            workpurpose={item?.item?.purposeCodeNavigation?.purposeName}
            traveldateTo={item?.item?.visitFromDate}
            traveldateFrom={item?.item?.visitToDate}
        
          />
        );
      }}
      keyExtractor={item => item?.id?.toString()}
    />
  );
};

export default CardList;
