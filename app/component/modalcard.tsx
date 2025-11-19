import { Text, View, StyleSheet } from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import TravelRoute from './travelroute';

interface IModalCard {
  type: string;
  workpurpose: string;
  traveldateTo: string;
  traveldateFrom: string;
  from: string;
  to: string;
  assignedby: string;
}

const ModalCard = (props: IModalCard) => {
  const {
    type = '',
    workpurpose = '',
    traveldateTo = '',
    traveldateFrom = '',
    from = '',
    to = '',
    assignedby = '',
  } = props;

  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.sectionWrapper}>
          <View style={styles.txtContainer}>
            <Text style={[styles.txtBold, styles.workPurpose]}>
              {workpurpose}
            </Text>
          </View>
        </View>

        <View style={[styles.txtContainer, styles.details]}>
          <View style={styles.calanderWrapper}>
            <Font name="calendar-o" size={18} color="#D22B2B" />
            <Text style={styles.dateTxt}>{traveldateTo}</Text>
          </View>

          <Feather name="arrow-right" size={24} color="#D22B2B" />
          <View style={styles.calanderWrapper}>
            <Font name="calendar-o" size={18} color="#D22B2B" />
            <Text style={styles.dateTxt}>{traveldateFrom}</Text>
          </View>
        </View>

        <View style={[styles.txtContainer, styles.details]}>
          <View style={styles.txtContainer}>
            <View style={styles.lIconWrapper}>
              <Entypo name="location-pin" size={22} color="#FFFFFF" />
            </View>
            <View>
              <Text style={styles.txtBold}>From:</Text>
              <Text
                style={[styles.assignedTxt, styles.assignedTxtFrom]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {from}
              </Text>
            </View>
          </View>
          <Feather name="arrow-right" size={24} color="#D22B2B" />
          <View style={styles.txtContainer}>
            <View style={styles.lIconWrapper}>
              <Entypo name="location-pin" size={22} color="#FFFFFF" />
            </View>
            <View>
              <Text style={styles.txtBold}>To: </Text>
              <Text
                style={[styles.assignedTxt, styles.assignedTxtFrom]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {to}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.txtContainer}>
          <View style={styles.userLogo}>
            <Font name="user" size={24} color="#D22B2B" />
          </View>
          <View>
            <Text style={styles.txtBold}>Assigned By:</Text>
            <Text style={styles.assignedTxt}>{assignedby}</Text>
          </View>
        </View>
      </View>
      <TravelRoute type={type} />
    </>
  );
};

export default ModalCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 15,
    elevation: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  txtBold: {
    fontWeight: '700',
    color: '#36454F',
  },
  txtContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  calanderWrapper: {
    flexDirection: 'row',
  },
  details: {
    justifyContent: 'space-between',
  },
  sectionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  highLight: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  workPurpose: {
    fontSize: 24,
  },
  dateTxt: {
    fontWeight: '600',
    paddingLeft: 10,
    color: '#36454F',
  },
  userLogo: {
    paddingRight: 10,
  },
  assignedTxt: {
    fontWeight: '600',
  },
  assignedTxtFrom: {
    width: 110,
  },
  lIconWrapper: {
    backgroundColor: '#D22B2B',
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
  },
  modalWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
