import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const leftArrow = require('../images/left-arrow.png');
const HeaderWithBackButton = (props) => {
    const { heading } = props;
    const navigation = useNavigation();
    return (
        <View style={{ paddingVertical: 16, backgroundColor: '#010a43' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute' }}>
                        <Image source={leftArrow} style={{ width: 24, height: 24, alignSelf: 'center', tintColor: 'white', marginRight: 8 }} />
                        <Text style={{ fontSize: 18, color: 'white' }}>Back</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, color: 'white', alignSelf: 'center' }}>{heading}</Text>
                </View>

            </View>

        </View>
    )
}

export default HeaderWithBackButton;