import React from 'react'
import { Image, Text, View } from 'react-native';
import AppButton from './AppButton';

const TransactionItem = (props) => {
    const { data, index, sortBy } = props;
    const color = data.transaction[0].status === 'received' ? '#34ccb4' : data.transaction[0].status === 'sent' ? '#fab853' : '#ff2e63';
    return (
        <>
            {(sortBy === 'recent' || sortBy === data.transaction[0].status) && <View style={{ flexDirection: 'row', backgroundColor: index % 2 == 0 ? '#192259' : '#10194e', flex: 1, paddingVertical: 10, paddingHorizontal: 15 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image source={{ uri: data.imageUrl }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                    <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                        <Text style={{ color: '#636ca3', fontWeight: 'bold', marginBottom: 5 }}>{data.name}</Text>
                        <AppButton title={data.transaction[0].status} />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 18, color: color }}>{'\u20B9'}{data.transaction[0].amount}</Text>
                </View>
            </View>}
        </>
    )
}

export default TransactionItem;