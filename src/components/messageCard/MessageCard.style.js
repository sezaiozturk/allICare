import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.purple,
        margin: 10,
        padding: 5,
        borderRadius: 10
    },
    top_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginBottom: 15
    },
    name: {
        color: 'white',
        fontSize: 15,
    },
    date: {
        color: 'white',
        fontSize: 12,
        marginTop: 3
    },
    comment: {
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 5
    },
    bottom_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 5,
        marginBottom: 5
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row'
    },
    text: {
        color: Colors.purple,
        fontSize: 12
    },
    count: {
        color: Colors.purple,
        fontSize: 12,
        marginRight: 5
    }
})