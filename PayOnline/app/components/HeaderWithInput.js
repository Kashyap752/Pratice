import React from 'react'
import { Image, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const leftArrow = require('../images/left-arrow.png');
const HeaderWithInput = (props) => {
    const { value, onChangeText } = props;
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#010a43' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={leftArrow} style={{ width: 24, height: 24, alignSelf: 'center', tintColor: 'white', marginRight: 8 }} />
                        <Text style={{ fontSize: 18, color: 'white' }}>Back</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ flex: 1 }}>
                    <TextInput
                        style={{ height: 40, margin: 12, borderWidth: 2, backgroundColor: '#10194e', borderColor: "#158186", borderRadius: 5, paddingHorizontal: 16, color: 'white', fontSize: 16 }}
                        onChangeText={onChangeText}
                        value={value}
                    /></View>

            </View>

        </View>
    )
}

export default HeaderWithInput;