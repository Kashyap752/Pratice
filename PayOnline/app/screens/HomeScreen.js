import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AppBottomSlider from "../components/AppBottomSlider";
import ButtonApp from "../components/ButtonApp";
import data from "../constants/data";
import styles from "./styles/HomePageStyle";

const menu = require('../images/hamburger.png');

const HomeScreen = () => {
    const [currentBalance, setCurrentBalance] = useState(0);
    const isFocused = useIsFocused();
    useEffect(() => {
        console.log("Is Focused");
        setCurrentBalance(data.currentAmount);
    }, [isFocused])
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#010a43', flex: 1 }}>
            <View style={{ flexDirection: 'row', margin: 16, }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Image source={menu} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                    <Text style={{ marginLeft: 10, fontSize: 24, alignSelf: 'center', fontWeight: 'bold', color: 'white' }}>Hello, Suraj</Text>
                </View>
                <ButtonApp onClick={() => navigation.navigate('AddMoneyScreen')} title="Add Money" style={styles.AddMoneyButton} buttonTextStyle={styles.AddMoneyButtonText} />
            </View>

            <View style={{ marginLeft: 16, marginVertical: 32 }}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: '400' }}>Your current balance is </Text>
                <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold', marginTop: 16 }}>{'\u20B9' + ' '}{currentBalance}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 50, marginHorizontal: 16 }}>
                <ButtonApp onClick={() => navigation.navigate('SendScreen', { action: 'request' })} title="Request money" style={[styles.RequestMoneyButton, { marginRight: 5 }]} buttonTextStyle={styles.RequestMoneyButtonText} />
                <ButtonApp onClick={() => navigation.navigate('SendScreen')} title="Send money" style={[styles.RequestMoneyButton, { marginLeft: 5 }]} buttonTextStyle={styles.RequestMoneyButtonText} />
            </View>
            <AppBottomSlider data={data} />
        </View>
    )
}

export default HomeScreen;