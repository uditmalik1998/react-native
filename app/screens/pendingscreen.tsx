import React, { useState } from 'react';
import CardList from '../component/cardlist';
import { View } from 'react-native';
import { useEffect } from 'react';
import { getTravelRequestMy } from '../api-manager/travel';

const PendingScreen = () => {
  const [pendingDetails, setpendingDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTravelRequestMy('V24565');
      const filterPendingData = data.filter(
        (item: any) =>
          item?.approvalStatusCodeNavigation?.statusName === 'Pending',
      );
      setpendingDetails(filterPendingData);
      console.log(filterPendingData, '***');
    };
    fetchData();
  }, []);

  return (
    <View>
      <CardList data={pendingDetails} type={"Open"}/>
    </View>
  );
};

export default PendingScreen;
