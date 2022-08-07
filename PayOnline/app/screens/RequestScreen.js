import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import ButtonApp from "../components/ButtonApp";
import HeaderWithBackButton from "../components/HeaderWithBackButton";
import styles from '../screens/styles/RequestScreenStyle';

const RequestScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route);
    return (
        <View style={{ flex: 1, backgroundColor: '#010a43' }}>
            <HeaderWithBackButton heading={'New Request'} />
            <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ borderColor: '#10194e', borderWidth: 20, borderRadius: 115 }}>
                    <View style={{ borderColor: '#192259', borderWidth: 20, borderRadius: 95 }}>
                        <Image source={{ uri: route.params ? route.params.data.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspMy-PHSq1cTWn8g_YC-DGxd8-GH2UM4mSg&usqp=CAU" }} style={{ width: 150, height: 150, borderRadius: 75 }} />
                    </View>

                </View>
                <Text style={styles.name}>{route.params.data.name}</Text>
                <Text style={styles.requestText}>
                    requesting for:{'\n'}
                </Text>
                <Text style={styles.moneyText}>
                    {'\u20B9'}{' '}{route.params.amount}
                </Text>
            </View>
            <View style={{ flex: 0.3, paddingTop: 16 }}>
                <ButtonApp onClick={() => navigation.navigate('HomeScreen')} title="Send request" style={[styles.RequestMoneyButton, { backgroundColor: '#ff2e63', borderWidth: 0 }]} buttonTextStyle={[styles.RequestMoneyButtonText, { color: 'white' }]} />
                <ButtonApp onClick={() => navigation.navigate('HomeScreen')} title="Don't send" style={styles.RequestMoneyButton} buttonTextStyle={styles.RequestMoneyButtonText} />
            </View>
        </View>
    )
}

export default RequestScreen;