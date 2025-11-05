import { Text, View, StyleSheet } from 'react-native';
import {getTypeColor} from "../utils/commonfunctions";

const Card = props => {
  const {
    type = '',
    workpurpose = '',
    traveldate = '',
    from = '',
    to = '',
    assignedby = '',
  } = props?.data;
  
  const color = getTypeColor(type);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.sectionWrapper}>
        <View style={styles.txtContainer}>
          <Text style={styles.txtBold}>Work Purpose:</Text>
          <Text style={styles.txtBold}>{workpurpose}</Text>
        </View>
        <View>
          <Text style={[styles.txtBold, styles.highLight, color]}>{type}</Text>
        </View>
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.txtBold}>Travel Date:</Text>
        <Text>{traveldate}</Text>
      </View>
      <View style={[styles.txtContainer, styles.details]}>
        <View style={styles.txtContainer}>
          <Text style={styles.txtBold}>From:</Text>
          <Text>{from}</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txtBold}>To: </Text>
          <Text>{to}</Text>
        </View>
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.txtBold}>Assigned By:</Text>
        <Text>{assignedby}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    paddingHorizontal: 15,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  txtBold: {
    fontWeight: 900,
  },
  txtContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  details: {
    justifyContent: 'space-between',
  },
  sectionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  highLight: {
    paddingVertical: 5,
  },
});
