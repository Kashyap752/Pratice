import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modalView: {
        borderTopLeftRadius: 15,
        borderTopEndRadius: 15,
        backgroundColor: "#10194e",
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: "40%"
    },
    RequestMoneyButton: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#ff2e63'
    },
    RequestMoneyButtonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
    },
    name: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginTop: 8
    },
    MobileNoText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '400',
        marginVertical: 16
    },
    numberText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    number: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 10,
        justifyContent: 'center',
    }
}) 
