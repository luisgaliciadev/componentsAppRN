import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../models/appInterfaces'
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem
}

export const FlagListMenuItem = ({menuItem}: Props) => {

    const navigation =  useNavigation();

    return (
        
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <IonicIcon name={menuItem.icon} size={25} color="#5856D6" />
                <Text style={styles.itemText}>{menuItem.name}</Text>
                <View style={{flex: 1}}/>
                <IonicIcon name="chevron-forward-outline" size={25} color="#5856D6" />
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


