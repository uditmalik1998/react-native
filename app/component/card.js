import { Text, View, StyleSheet } from "react-native";

const Card = () => {
    return (<View style={styles.cardContainer}>
        <View style={styles.sectionWrapper}>
            <View style={styles.txtContainer}>
                <Text style={styles.txtBold}>Work Purpose:</Text><Text style={styles.txtBold}>Store Visit</Text>
            </View>
            <View>
                <Text style={[styles.txtBold, styles.highLight]}>Completed</Text>
            </View>
        </View>
        <View style={styles.txtContainer}>
            <Text style={styles.txtBold}>Travel Date:</Text><Text>31 October 2025</Text>
        </View>
        <View style={styles.txtContainer}>
            <View style={styles.txtContainer}><Text style={styles.txtBold}>From:</Text><Text>UP</Text></View>
            <View style={[styles.txtContainer, , styles.details]}><Text style={styles.txtBold}>To: </Text><Text>DELHI-100990</Text></View>
        </View>
        <View style={styles.txtContainer}>
            <Text style={styles.txtBold}>Assigned By:</Text><Text>Pappu kumar</Text>
        </View>

    </View>)
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        padding: 5
    },
    txtBold: {
        fontWeight: 900,
    },
    txtContainer: {
        flexDirection: "row",
        paddingVertical: 5
    },
    details: {
        paddingLeft: 120
    },
    sectionWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10
    },
    highLight: {
        color: "#078107ff",
        paddingVertical: 5
    }
})