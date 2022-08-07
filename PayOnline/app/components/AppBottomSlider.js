import React, { useState } from 'react';

import { Alert, Image, Pressable, Text, View } from 'react-native';
import TransactionList from './TransactionList';
import { Menu, MenuItem } from 'react-native-material-menu';
import styles from './styles/AppBottomSliderStyle'
const downArrow = require('../images/down-arrow.png');

const AppBottomSlider = (props) => {
    const { data } = props;
    const [arrowClicked, setArrowClicked] = useState(false);
    const [visible, setVisible] = useState(false);
    const [sortByParam, setSortByParam] = useState('recent');
    const hideMenu = (sortBy) => { setVisible(false); setSortByParam(sortBy) };

    console.log(sortByParam);

    const sortByOption = () => {
        return (
            <Menu
                visible={visible}
                anchor={<Pressable onPress={() => { setVisible(!visible); }}>
                    <Image source={downArrow} style={styles.menuIcon} />
                </Pressable>}
                onRequestClose={() => hideMenu(sortByParam)}
            >
                <MenuItem onPress={() => hideMenu('recent')}>Recent</MenuItem>
                <MenuItem onPress={() => hideMenu('received')}>Received</MenuItem>
                <MenuItem onPress={() => hideMenu('sent')}>Sent</MenuItem>
                <MenuItem onPress={() => hideMenu('failed')}>Failed</MenuItem>
            </Menu>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.drawer}></View>

            <View style={styles.viewContainer}>
                <Text style={styles.transactionText}>All Transactions</Text>
                <Text style={styles.sortByText}>Sort by: </Text>
                <Text style={styles.sortByParam}>{sortByParam}</Text>
                {sortByOption()}
                {/* <Pressable onPress={() => setArrowClicked(!arrowClicked)}><Image source={downArrow} style={{ height: 24, width: 16, tintColor: 'white', justifyContent: 'center', alignSelf: 'center', marginLeft: 10 }} /></Pressable> */}
            </View>
            <View style={styles.transactionList}>
                <TransactionList data={data} sortBy={sortByParam} />
            </View>
        </View >

    )
}

export default AppBottomSlider;