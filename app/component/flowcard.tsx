import { Text, View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FlowCard = () => {
  return (
    <View style={styles.flowCard}>
      <View style={styles.headingWrapper}>
        <FontAwesome
          style={styles.rupeeIcon}
          size={26}
          name="rupee"
          color="#D22B2B"
        />
        <Text style={styles.heading}>Bill Request Flow</Text>
      </View>
      <View>
        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>Under Manager</Text>
          <Text style={styles.txt}>0</Text>
        </View>
        <View style={styles.progressBar}></View>
      </View>
      <View>
        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>Under Manager</Text>
          <Text style={styles.txt}>0</Text>
        </View>
        <View style={[styles.progressBar]}></View>
      </View>
      <View>
        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>Under Manager</Text>
          <Text style={styles.txt}>0</Text>
        </View>
        <View style={[styles.progressBar, styles.fillProgressBar]}></View>
      </View>
    </View>
  );
};

export default FlowCard;

const styles = StyleSheet.create({
  flowCard: {
    padding: 16,
    margin: 14,
    backgroundColor: '#FFF',
    borderRadius: 12,
    elevation: 10,
    shadowColor: '#D22B2B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  headingWrapper: {
    flexDirection: 'row',
    paddingBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgb(51, 51, 51)',
  },
  rupeeIcon: {
    marginRight: 8,
  },
  txtWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    color: 'rgb(51, 51, 51)',
    fontWeight: 700,
    fontSize: 16,
  },
  progressBar: {
    width: 'auto',
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  fillProgressBar: {
    backgroundColor: '#D22B2B',
  },
});
