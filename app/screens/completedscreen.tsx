import React, { useEffect, useState } from 'react';
import CardList from '../component/cardlist';
import { View } from 'react-native';
import { getTravelRequestMy } from '../api-manager/travel';

const CompletedScreen = () => {
  const [completeDetails, setCompleteDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTravelRequestMy('V24565');
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
