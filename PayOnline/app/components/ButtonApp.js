import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/ButtonAppStyle';

const ButtonApp = (props) => {
    const { title, buttonTextStyle, onClick, style } = props;
    return (
        <TouchableOpacity onPress={onClick} style={{ flex: 1 }}>
            <View style={style ? style : styles.buttonStyle}>
                <Text style={buttonTextStyle ? buttonTextStyle : styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonApp;