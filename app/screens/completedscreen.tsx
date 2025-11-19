import React, { useEffect, useState } from 'react';
import CardList from '../component/cardlist';
import { StyleSheet, View } from 'react-native';
import { getTravelRequestMy } from '../api-manager/travel';
import { getItem } from '../utils/AsyncStorage';
import NoRequest from '../component/norequest';

interface ICompletedScreen {
  navigation: {
    navigate: (args: string) => void;
  };
}

const CompletedScreen = ({ navigation }:ICompletedScreen) => {
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
    <View style={styles.completeContainer}>
      {completeDetails?.length > 0 ? (
        <CardList data={completeDetails} type="Completed" />
      ) : (
        <NoRequest
          navigation={navigation}
          heading="No Completed Requests"
          subHeading="You haven't completed any travel requests yet. Start by creating your
          first travel request!"
          iconName="airplane-sharp"
        />
      )}
    </View>
  );
};

export default CompletedScreen;

const styles = StyleSheet.create({
  completeContainer: {
    flex: 1,
  },
});
