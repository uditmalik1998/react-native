import React from 'react';
import CardList from '../component/cardlist';
import { View } from 'react-native';

const PendingScreen = () => {
  const data = [
    {
      id: 1,
      type: 'Open',
      workpurpose: 'Project Work',
      traveldate: '26 September 2025',
      from: 'HO-NEW-DELHI',
      to: 'MUZAFFARNAGAR',
      assignedby: 'Udit Malik',
      traveldateto: '30 September 2025',
    },
    {
      id: 2,
      type: 'Open',
      workpurpose: 'Project Work',
      traveldate: '26 September 2025',
      from: 'HO-NEW-DELHI',
      to: 'MUZAFFARNAGAR',
      assignedby: 'Udit Malik',
      traveldateto: '30 September 2025',
    },
  ];
  return (
    <View>
      <CardList data={data} />
    </View>
  );
};

export default PendingScreen;
