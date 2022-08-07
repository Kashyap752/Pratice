import React from "react";
import { Text, View } from "react-native";
import HeaderWithBackButton from "../components/HeaderWithBackButton";

const AddMoneyScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderWithBackButton heading={'Add Money'} />
            <Text>Add Money Screen</Text>
        </View>
    )
}

export default AddMoneyScreen;