import React, { useState } from 'react';
import CardList from '../component/cardlist';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { getTravelRequestMy } from '../api-manager/travel';
import { getItem } from '../utils/AsyncStorage';
import NoRequest from '../component/norequest';
import Loader from '../component/loader';

interface IPendingScreen {
  navigation: {
    navigate: (args: string) => void;
  };
}


const PendingScreen = ({ navigation }: IPendingScreen) => {
  const [pendingDetails, setpendingDetails] = useState([]);
  const [isLoading, setisLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      const empCode = await getItem('employeeCode');
      const data = await getTravelRequestMy(empCode);
      const filterPendingData = data.filter(
        (item: any) =>
          item?.approvalStatusCodeNavigation?.statusName === 'Pending',
      );
      setpendingDetails(filterPendingData);
      setisLoading(false);
    };
    fetchData();
  }, []);

  if(isLoading){
    return (
      <Loader
        size="large"
        color="#D22B2B"
        styles={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      />
    );
  }

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
