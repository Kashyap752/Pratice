import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import ButtonApp from "../components/ButtonApp";
import styles from './styles/SplashScreenStyle';

const SplashScreen = () => {
    const image1 = require('../images/home1.png');
    const image2 = require('../images/home2.png');
    const navigation = useNavigation();
    const [one, setOne] = useState(true);
    const width = one ? 20 : 40;
    useFocusEffect(() => {
        setTimeout(() => {
            setOne(!one);
            console.log(one);
        }, 5000);
    })
    const banner1 = () => {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.7 }}></View>
                <View style={{ backgroundColor: 'white', justifyContent: 'flex-end', flex: 0.3, width: '90%', borderTopEndRadius: 70 }}>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 30 }}>
                        <View style={{ width: 40, height: 8, backgroundColor: 'orange', borderRadius: 5, marginHorizontal: 5 }}></View>
                        <View style={{ width: 20, height: 8, backgroundColor: 'yellow', borderRadius: 5, marginHorizontal: 5 }}></View>
                        <View style={{ width: 20, height: 8, backgroundColor: 'yellow', borderRadius: 5, marginHorizontal: 5 }}></View>
                    </View>
                    <Text style={{ color: '#273164', fontSize: 24, fontWeight: 'bold', marginTop: 12, marginHorizontal: 16 }}>
                        Transfer Money With Ease
                    </Text>
                    <Text style={{ color: '#656d98', fontSize: 18, marginVertical: 16, marginHorizontal: 16 }}>
                        Making money is hard enough, we make transferring it easy enough.
                    </Text>
                    <ButtonApp onClick={() => navigation.navigate('HomeScreen')} title="Start banking" style={styles.StartBankingButton} buttonTextStyle={styles.StartBankingText} />
                </View>
            </View>

        )
    }
    const banner2 = () => {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.7 }}></View>
                <View style={{ backgroundColor: 'blue', justifyContent: 'flex-end', flex: 0.3, width: '90%', borderTopEndRadius: 70 }}>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 30 }}>
                        <View style={{ width: 20, height: 8, backgroundColor: 'yellow', borderRadius: 5, marginHorizontal: 5 }}></View>
                        <View style={{ width: 40, height: 8, backgroundColor: 'orange', borderRadius: 5, marginHorizontal: 5 }}></View>
                        <View style={{ width: 20, height: 8, backgroundColor: 'yellow', borderRadius: 5, marginHorizontal: 5 }}></View>
                    </View>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginTop: 12, marginHorizontal: 16 }}>
                        Transfer That Is Safe
                    </Text>
                    <Text style={{ color: 'white', fontSize: 18, marginVertical: 16, marginHorizontal: 16 }}>
                        You have nothing to be scared about, we got you covered.
                    </Text>
                    <ButtonApp onClick={() => navigation.navigate('HomeScreen')} title="Start banking" style={[styles.StartBankingButton, { backgroundColor: 'white' }]} buttonTextStyle={[styles.StartBankingText, { color: 'blue' }]} />
                </View>
            </View>

        )
    }
    return (
        <View style={{ backgroundColor: 'red', flex: 1 }}>
            <ImageBackground source={one ? image1 : image2} style={{
                flex: 1,
                justifyContent: 'center',
                width: '100%',
                height: '100%'
            }} >
                {one ? banner1() : banner2()}
            </ImageBackground>
        </View>
    )
}

export default SplashScreen;