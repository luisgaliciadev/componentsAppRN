import React, { useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { MenuItem } from '../models/appInterfaces'
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}

export const FlagListMenuItem = ({menuItem}: Props) => {

    const navigation =  useNavigation();
    const {theme: {colors}} = useContext(ThemeContext)

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <IonicIcon name={menuItem.icon} size={25} color={colors.primary} />
                <Text style={{...styles.itemText, color: colors.text}}>{menuItem.name}</Text>
                <View style={{flex: 1}}/>
                <IonicIcon name="chevron-forward-outline" size={25} color={colors.primary} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 20
    },
});


