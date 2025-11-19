import React, { useEffect, useState } from 'react';
import CardList from '../component/cardlist';
import { View } from 'react-native';
import { getTravelRequestMy } from '../api-manager/travel';
import { getItem } from '../utils/AsyncStorage';

const CompletedScreen = () => {
  const [completeDetails, setCompleteDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const empCode = await getItem('employeeCode');
      const data = await getTravelRequestMy(empCode);
      const filterCompleteData = data.filter(
        (item: any) =>
          item?.approvalStatusCodeNavigation?.statusName === 'Approved',
      );
      setCompleteDetails(filterCompleteData);
    };
    fetchData();
  }, []);

  return (
    <View>
      <CardList data={completeDetails} type="Completed" />
    </View>
  );
};

export default CompletedScreen;
