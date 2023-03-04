import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        paddingBottom: 30

    },
    input_container: {
        flex: 1
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,

    }
})