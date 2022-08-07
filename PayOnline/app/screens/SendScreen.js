import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Modal, Pressable, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { BottomDrawer } from "../components/BottomDrawer";
import ButtonApp from "../components/ButtonApp";
import HeaderWithInput from "../components/HeaderWithInput";
import contactList from "../constants/contact";
import styles from "./styles/SendScreenStyle";
import data from "../constants/data";
import ContactItem from "../components/ContactItem";

const SendScreen = () => {
    const [value, setValue] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const [isClicked, setIsclicked] = useState(false);
    const [inputModal, setInputModal] = useState(false);
    const [contact, setContact] = useState({});
    const [amount, setAmount] = useState(0);
    const crossIcon = require('../images/cross.png');
    const backspaceIcon = require('../images/backspace.png');
    const [data1, setData1] = useState(contactList.contacts);
    const [newData, setNewData] = useState(data1);

    useEffect(() => {
        filterData();
    }, [value])


    const sendMoney = () => {
        if (data.currentAmount >= parseFloat(amount)) {
            data.currentAmount = data.currentAmount - parseFloat(amount);
            console.log("sent", data.currentAmount, parseFloat(amount));
            data.history.unshift({ ...contact, transaction: [{ amount: parseFloat(amount), status: 'sent' }] })
            console.log(data.history);
            navigation.navigate('HomeScreen');
        } else {
            data.history.unshift({ ...contact, transaction: [{ amount: parseFloat(amount), status: 'failed' }] })
            ToastAndroid.show("Insufficent Balance", 4000);
            console.log(data.history);
            navigation.navigate('HomeScreen');
        }

    }
    const numberKeyboard = (arr) => {
        return arr.map((data, index) => {
            return (
                <View key={index} style={{ flexDirection: 'row' }}>
                    <Pressable style={styles.number}
                        onPress={() => { data === 'icon' ? setAmount(amount.slice(0, -1)) : amount == '0' ? setAmount(data) : setAmount(amount + data) }}>
                        {data === 'icon' ? <Image source={backspaceIcon} style={{ width: 24, height: 24, tintColor: 'white', alignSelf: 'center' }} /> : <Text style={styles.numberText}>{data}</Text>}
                    </Pressable>
                </View>
            )
        })
    }
    const inputDrawer = () => {
        return (
            <Modal
                transparent={true}
                visible={inputModal}
                onDismiss={() => {
                    setInputModal(false)
                }}
                onRequestClose={() => {
                    setInputModal(false)
                }}
            >
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: '10%', paddingBottom: 10, backgroundColor: 'black', opacity: 0.8 }}>
                    <Pressable onPress={() => {
                        setInputModal(false);
                        setAmount('')
                    }}><Image source={crossIcon} style={{ width: 40, height: 40, }} /></Pressable>
                </View>
                <View style={[styles.modalView, { height: '90%' }]}>
                    <View style={{ justifyContent: 'center', marginVertical: 30 }}>
                        <Text style={styles.numberText}>{'\u20B9'}{' '}{amount}</Text>
                    </View>
                    <View style={{}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            {numberKeyboard(['1', '2', '3'])}
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            {numberKeyboard(['4', '5', '6'])}
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            {numberKeyboard(['7', '8', '9'])}
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            {numberKeyboard(['.', '0', 'icon'])}
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <ButtonApp onClick={() => { route.params ? parseFloat(amount) > 0 && navigation.navigate('RequestScreen', { data: contact, amount: amount }) : sendMoney() }} title={route.params ? 'Request money' : 'Send money'} style={[styles.RequestMoneyButton, { marginTop: 25 }]} buttonTextStyle={styles.RequestMoneyButtonText} />
                    </View>

                </View>
            </Modal>
        );
    };
    const bottomDrawer = () => {
        return (
            <Modal
                transparent={true}
                visible={isClicked}
                onDismiss={() => {
                    setIsclicked(false)
                }}
                onRequestClose={() => {
                    setIsclicked(false)
                }}
            >
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => { setIsclicked(false) }}
                    activeOpacity={1}
                >
                    <View style={styles.modalView}>
                        <View
                            style={{
                                backgroundColor: '#4e589f',
                                width: 70,
                                height: 7,
                                borderRadius: 5,
                                alignSelf: "center",
                                marginTop: 10,
                            }}
                        ></View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: contact.imageUrl }} style={{ width: 70, height: 70, borderRadius: 75, marginTop: 32 }} />
                            <Text style={styles.name}>{contact.name}</Text>
                            <Text style={styles.MobileNoText}>{contact.mblNo}</Text>
                            <ButtonApp onClick={() => setInputModal(true)} title="Continue" style={[styles.RequestMoneyButton, { marginLeft: 5 }]} buttonTextStyle={styles.RequestMoneyButtonText} />
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={{}}>
                <ContactItem item={item} index={index} onClick={() => {
                    setIsclicked(true);
                    setContact(item);
                }} />
            </View>
        )
    }
    const filterData = () => {
        setNewData(data1.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase())));
    }
    const [selected, setSelected] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: '#010a43' }}>
            <HeaderWithInput value={value} onChangeText={(text) => { setValue(text); }} />
            <FlatList
                data={newData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                contentContainerStyle={{
                    alignSelf: 'center',
                    alignItems: 'center',
                }}
                columnWrapperStyle={{ flexWrap: 'wrap' }}
                numColumns={newData.length}
                extraData={selected}
            />
            {bottomDrawer()}
            {inputDrawer()}
        </View>
    )
}

export default SendScreen;