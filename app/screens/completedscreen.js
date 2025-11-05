import React from 'react';
import CardList from '../component/cardlist';
import { View } from 'react-native';

const CompletedScreen = () => {
  const data = [
    {
      id: 1,
      type: 'Completed',
      workpurpose: 'Project Work',
      traveldate: '26 Setpember 2025',
      from: 'HO-NEW-DELHI',
      to: 'MUZAFFARNAGAR',
      assignedby: 'Udit Malik',
    },
    {
      id: 2,
      type: 'Completed',
      workpurpose: 'Project Work',
      traveldate: '26 Setpember 2025',
      from: 'HO-NEW-DELHI',
      to: 'MUZAFFARNAGAR',
      assignedby: 'Udit Malik',
    },
    {
      id: 3,
      type: 'Completed',
      workpurpose: 'Project Work',
      traveldate: '26 Setpember 2025',
      from: 'HO-NEW-DELHI',
      to: 'MUZAFFARNAGAR',
      assignedby: 'Udit Malik',
    },
  ];
  return (
    <View>
      <CardList data={data} />
    </View>
  );
};

export default CompletedScreen;
