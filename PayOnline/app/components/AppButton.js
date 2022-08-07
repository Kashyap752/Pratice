import React from 'react'
import { View, TouchableWithoutFeedback, Text, Image } from 'react-native'
import styles from './styles/AppButtonStyle';

const AppButton = (props) => {
    const received = require('../images/recieved.png');
    const sent = require('../images/sent.png');
    const failed = require('../images/fail.png');
    const { title, onClick, style } = props;

    const image = title === 'received' ? received : title === 'sent' ? sent : failed;
    const backgroundColor = title === 'received' ? '#34ccb4' : title === 'sent' ? '#fab853' : title === 'failed' && '#ff2e63';
    return (
        <View style={{}}>
            <TouchableWithoutFeedback onPress={onClick}>
                <View style={[style, styles.buttonView, {
                    backgroundColor: backgroundColor,
                }]}>
                    <Image source={image} style={styles.image} />
                    <Text style={{ fontSize: 12, padding: 5 }}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    )
}

export default AppButton;