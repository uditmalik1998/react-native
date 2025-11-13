import { FlatList, View } from 'react-native';
import DashBoardCard, { IDashBoardCard } from '../component/dashboardcard';
import FlowCard from '../component/flowcard';
import { ScrollView } from 'react-native-gesture-handler';

const DashBoardScreen = () => {
  const data = [
    {
      id: 1,
      heading: 'Bill Requests Summary',
      items: [
        { text: 'Total Bill Request', iconName: 'sticky-note-2', value: '0' },
        { text: 'Pending', iconName: 'clock', value: '0' },
        { text: 'Approved', iconName: 'check', value: '0' },
        { text: 'Rejected', iconName: 'circle-with-cross', value: '0' },
      ],
    },
    {
      id: 2,
      heading: 'Travel Requests Summary',
      items: [
        { text: 'Total Travel Request', iconName: 'suitcase', value: '0' },
        { text: 'Pending', iconName: 'clock', value: '0' },
        { text: 'Approved', iconName: 'check', value: '0' },
        { text: 'Rejected', iconName: 'circle-with-cross', value: '0' },
      ],
    },
  ];

  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={(item: { item: IDashBoardCard }) => (
          <DashBoardCard {...item} />
        )}
        keyExtractor={(item: IDashBoardCard) => item.id.toString()}
      />
      <FlowCard />
    </ScrollView>
  );
};

export default DashBoardScreen;
