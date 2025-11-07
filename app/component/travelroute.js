import { Text, View, StyleSheet } from 'react-native';

const TravelRoute = () => {
  return (
    <View style={styles.travelContainer}>
      <View style={styles.countWrapper}>
        <Text style={styles.txt}>1</Text>
        <View style={styles.txtLine}></View>
      </View>
      <View>
        <Text>LeftHeadOffice</Text>
      </View>
    </View>
  );
};

export default TravelRoute;

const styles = StyleSheet.create({
  travelContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  countWrapper: {
    backgroundColor: '#666666',
    borderRadius: 50,
    width: 30,
    height: 30,
  },

  txt: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 20,
  },
  txtLine: {
    borderLeftWidth: 4,
    height: 30,
    borderColor: '#666666',
    position: 'absolute',
    top: 30,
    left: 13,
  },
});
