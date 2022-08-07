import React from "react";
import { FlatList, Text, View } from "react-native";
import TransactionItem from "./TransactionItem";

const TransactionList = (props) => {
    const { data, sortBy } = props;
    const renderItem = ({ item, index }) => {
        return (
            <View style={{}}>
                <TransactionItem data={item} index={index} sortBy={sortBy} />
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data.history}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default TransactionList;