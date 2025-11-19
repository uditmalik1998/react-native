import React, { useState } from 'react';
import CardList from '../component/cardlist';
import { View } from 'react-native';
import { useEffect } from 'react';
import { getTravelRequestMy } from '../api-manager/travel';
import { getItem } from '../utils/AsyncStorage';

const PendingScreen = () => {
  const [pendingDetails, setpendingDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const empCode = await getItem('employeeCode');
      const data = await getTravelRequestMy(empCode);
      const filterPendingData = data.filter(
        (item: any) =>
          item?.approvalStatusCodeNavigation?.statusName === 'Pending',
      );
      setpendingDetails(filterPendingData);
    };
    fetchData();
  }, []);

  return (
    <View>
      <CardList data={pendingDetails} type={'Open'} />
    </View>
  );
};

export default PendingScreen;
