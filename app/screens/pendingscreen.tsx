import React, { useState } from 'react';
import CardList from '../component/cardlist';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { getTravelRequestMy } from '../api-manager/travel';
import { getItem } from '../utils/AsyncStorage';
import NoRequest from '../component/norequest';

interface IPendingScreen {
  navigation: {
    navigate: (args: string) => void;
  };
}


const PendingScreen = ({ navigation }: IPendingScreen) => {
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
    <View style={styles.pendingContainer}>
      {pendingDetails?.length > 0 ? (
        <CardList data={pendingDetails} type={'Open'} />
      ) : (
        <NoRequest
          heading="No Active Requests"
          subHeading={`You don't have any active travel requests at the moment. Create a new request to get started!`}
          iconName="pending-actions"
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default PendingScreen;

const styles = StyleSheet.create({
  pendingContainer: {
    flex: 1,
  },
});
