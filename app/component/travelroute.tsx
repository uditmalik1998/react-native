import { Text, View, StyleSheet } from 'react-native';



interface ITravelRoute{
 type:string;
}

const TravelRoute = (props: ITravelRoute) => {
  
  const data = [
    { id: 1, heading: 'Left Head Office', isActive: true },
    {
      id: 2,
      heading: 'Boarded Transport',
      isActive: props?.type === 'Completed',
    },
    {
      id: 3,
      heading: 'Arrived at Destination',
      isActive: props?.type === 'Completed',
    },
    {
      id: 4,
      heading: 'Check into Accomodation',
      isActive: props?.type === 'Completed',
    },
    {
      id: 5,
      heading: 'Completed Visit',
      isActive: props?.type === 'Completed',
    },
  ];


  return (
    <View style={styles.travelWrapper}>
      {data?.length > 0 &&
        data.map((item, index) => (
          <View style={styles.travelContainer} key={item.id}>
            <View style={styles.countWrapper}>
              <Text style={styles.txt}>{item.id}</Text>
              {data.length - 1 === index ? null : (
                <View style={styles.txtLine}></View>
              )}
            </View>
            <View style={styles.headingWrapper}>
              <Text
                style={item.isActive ? styles.heading : styles.headingInActive}
              >
                {item.heading}
              </Text>
            </View>
          </View>
        ))}
    </View>
  );
};

export default TravelRoute;

const styles = StyleSheet.create({
  travelWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  travelContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  countWrapper: {
    backgroundColor: 'rgb(143, 141, 141)',
    width: 30,
    height: 30,
    borderRadius: 50,
  },

  txt: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 20,
  },
  txtLine: {
    borderLeftWidth: 4,
    height: 28,
    borderColor: ' rgb(143, 141, 141)',
    position: 'absolute',
    top: 29,
    left: 13,
  },
  headingWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  heading: {
    backgroundColor: '#D22B2B',
    color: '#FFFFFF',
    paddingVertical: 6,
    fontSize: 16,
    borderRadius: 4,
    paddingLeft: 10,
  },
  headingInActive: {
    backgroundColor: 'rgb(224, 221, 221)',
    paddingVertical: 6,
    fontSize: 16,
    borderRadius: 4,
    paddingLeft: 10,
  },
});
