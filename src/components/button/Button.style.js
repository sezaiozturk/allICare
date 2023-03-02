import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        margin: 5,
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    }
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'purple',
        },
        title: {
            ...base_style.title,
            color: 'white',
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderColor: 'purple',
            borderWidth: 2
        },
        title: {
            ...base_style.title,
            color: 'purple',
        }
    })

}