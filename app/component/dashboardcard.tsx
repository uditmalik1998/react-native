import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

interface ICard {
  text: string;
  iconName: string;
  value: string;
}

export interface IDashBoardCard {
  heading: string;
  items: ICard[];
  id: number;
}

const DashBoardCard = (props: { item: IDashBoardCard }) => {
  const { heading = '', items = [] } = props.item;

  return (
    <View style={styles.dashboardCard}>
      <View style={styles.headingWrapper}>
        <Icon
          style={styles.icon}
          name="sticky-note-2"
          size={28}
          color="#D22B2B"
        />
        <Text style={styles.heading}>{heading}</Text>
      </View>
      <View>
        <View style={styles.totalBill}>
          <View style={styles.totalBillWrapper}>
            {props.item.id === 1 ? (
              <Icon
                style={styles.totalIcon}
                name={items?.[0]?.iconName}
                size={40}
                color="#007AFF"
              />
            ) : (
              <FontIcon name={items?.[0]?.iconName} size={40} color="#007AFF" />
            )}
            <Text style={styles.totalTxt}>{items?.[0].text}</Text>
            <Text style={styles.totalCount}>{items?.[0]?.value}</Text>
          </View>
          <View style={[styles.totalBillWrapper, styles.pending]}>
            <Octicons
              style={styles.totalIcon}
              name={items?.[1]?.iconName}
              size={40}
              color="#FFA500"
            />
            <Text style={styles.totalTxt}>{items?.[1]?.text}</Text>
            <Text style={styles.totalCount}>{items?.[1]?.value}</Text>
          </View>
        </View>

        <View style={styles.totalBill}>
          <View style={[styles.totalBillWrapper, styles.approved]}>
            <FontIcon
              style={styles.totalIcon}
              name={items?.[2]?.iconName}
              size={40}
              color="#28A745"
            />
            <Text style={styles.totalTxt}>{items?.[2]?.text}</Text>
            <Text style={styles.totalCount}>{items?.[2]?.value}</Text>
          </View>
          <View style={[styles.totalBillWrapper, styles.rejected]}>
            <Entypo
              style={styles.totalIcon}
              name={items?.[3]?.iconName}
              size={40}
              color="#DC3545"
            />
            <Text style={styles.totalTxt}>{items?.[3]?.text}</Text>
            <Text style={styles.totalCount}>{items?.[3]?.value}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashBoardCard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgb(51, 51, 51)',
  },
  headingWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dashboardCard: {
    padding: 16,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 12,
    margin: 14,
    shadowColor: '#D22B2B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  icon: {
    paddingRight: 8,
  },
  totalBill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  totalIcon: {
    marginBottom: 8,
  },
  totalTxt: {
    color: 'rgb(102, 102, 102)',
    fontSize: 14,
    paddingBottom: 8,
  },
  totalCount: {
    fontSize: 32,
  },
  totalBillWrapper: {
    backgroundColor: '#007AFF19',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    minWidth: 150,
  },
  pending: {
    backgroundColor: '#FFA5001A',
  },
  approved: {
    backgroundColor: '#28A7451A',
  },
  rejected: {
    backgroundColor: '#DC354519',
  },
});
