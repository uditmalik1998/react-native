import { FlatList } from 'react-native';
import DashBoardCard, { IDashBoardCard } from '../component/dashboardcard';
import FlowCard from '../component/flowcard';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import {
  getBillRequestDetails,
  getTravelRequestDetails,
} from '../utils/commonfunctions';
import Loader from '../component/loader';

interface IGetBillRequestDetails {
  pendingBill: number;
  totalBillRequest: number;
  rejectedBill: number;
  approvedBill: number;
  manager: number;
  rlp: number;
  audit: number;
  finance: number;
}

interface IDetails {
  id: number;
  heading: string;
  items: { id: number; text: string; iconName: string; value: number }[];
}

interface IFlowData {
  id: number;
  heading: string;
  items: { id: number; title: string; value: number }[];
}

const DashBoardScreen = () => {
  const [details, setDetails] = useState<IDetails[] | any>([]);
  const [flowData, setFlowData] = useState<IFlowData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {
          pending,
          totalTravelRequests,
          rejected,
          approved,
          tManager,
          tAdmin,
          tHOD,
        } = await getTravelRequestDetails();

        const {
          pendingBill = 0,
          totalBillRequest = 0,
          rejectedBill = 0,
          approvedBill = 0,
          manager = 0,
          rlp = 0,
          audit = 0,
          finance = 0,
        }: IGetBillRequestDetails | any = await getBillRequestDetails();

        const data = [
          {
            id: 1,
            heading: 'Bill Requests Summary',
            items: [
              {
                id: 1,
                text: 'Total Bill Request',
                iconName: 'sticky-note-2',
                value: totalBillRequest,
              },
              { id: 2, text: 'Pending', iconName: 'clock', value: pendingBill },
              {
                id: 3,
                text: 'Approved',
                iconName: 'check',
                value: approvedBill,
              },
              {
                id: 4,
                text: 'Rejected',
                iconName: 'circle-with-cross',
                value: rejectedBill,
              },
            ],
          },
          {
            id: 2,
            heading: 'Travel Requests Summary',
            items: [
              {
                id: 1,
                text: 'Total Travel Request',
                iconName: 'suitcase',
                value: totalTravelRequests,
              },
              { id: 2, text: 'Pending', iconName: 'clock', value: pending },
              { id: 3, text: 'Approved', iconName: 'check', value: approved },
              {
                id: 4,
                text: 'Rejected',
                iconName: 'circle-with-cross',
                value: rejected,
              },
            ],
          },
        ];

        const flowData = [
          {
            id: 1,
            heading: 'Bill Request Flow',
            items: [
              { id: 1, title: 'Under Manager', value: manager },
              { id: 2, title: 'Under RLP', value: rlp },
              { id: 3, title: 'Under Audit', value: audit },
              { id: 4, title: 'Under Finance', value: finance },
            ],
          },
          {
            id: 2,
            heading: 'Travel Request Flow',
            items: [
              { id: 1, title: 'Under Manager', value: tManager },
              { id: 2, title: 'Under Admin', value: tAdmin },
              { id: 3, title: 'Under HOD', value: tHOD },
            ],
          },
        ];
        setDetails(data);
        setFlowData(flowData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      {isLoading ? (
        <Loader
          size="large"
          color="#D22B2B"
          styles={{ flex:1,justifyContent: 'center', alignItems: 'center' }}
        />
      ) : (
        <>
          {details?.length > 0 && (
            <FlatList
              data={details}
              renderItem={(item: { item: IDashBoardCard }) => (
                <DashBoardCard {...item} />
              )}
              keyExtractor={(item: IDashBoardCard) => item.id.toString()}
              scrollEnabled={false}
            />
          )}

          {flowData?.length > 0 &&
            flowData.map(item => <FlowCard key={item?.id} {...item} />)}
        </>
      )}
    </ScrollView>
  );
};

export default DashBoardScreen;
