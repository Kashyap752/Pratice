import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'

const ContactItem = (props) => {
    const [isClick, setIsClick] = useState(false);
    const { item, index, onClick, modalVisible } = props;

    return (
        <TouchableOpacity onPress={onClick} onPressIn={() => setIsClick(true)}>
            <View style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: item.imageUrl }} style={{ width: isClick ? 90 : 60, height: isClick ? 90 : 60, borderRadius: isClick ? 45 : 30, marginBottom: 10, borderColor: 'yellow', borderWidth: isClick ? 5 : 0 }} />
                    <Text style={{ color: '#636ca3', fontWeight: 'bold', marginBottom: 5, textTransform: 'capitalize' }}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ContactItem;