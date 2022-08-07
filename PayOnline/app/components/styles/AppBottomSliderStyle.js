import { StyleSheet } from "react-native";

export default StyleSheet.create({
    menuIcon: {
        height: 24,
        width: 16,
        tintColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 10
    },
    transactionList: {
        flex: 1,
        marginTop: 30
    },
    container: {
        flex: 1,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: '#10194e'
    },
    drawer: {
        width: 70,
        height: 5,
        backgroundColor: '#4e589f',
        alignSelf: 'center',
        marginTop: 10
    },
    viewContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 10
    },
    transactionText: {
        fontSize: 20,
        color: 'white',
        flex: 1,
        fontWeight: 'bold'
    },
    sortByText: {
        fontSize: 20,
        color: '#4e589f'
    },
    sortByParam: {
        fontSize: 20,
        color: 'white',
        textTransform: 'capitalize'
    },





})