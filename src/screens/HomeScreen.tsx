import 'react-native-gesture-handler';

import React from 'react'
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../../android/app/src/theme/appTheme';
import { FlagListMenuItem } from '../components/FlagListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';


export const HomeScreen = () => {

  

    return (
        <View style={{flex: 1, ...styles.globalMargin}}>
            <FlatList
                data={menuItems}
                renderItem={({item}) => <FlagListMenuItem menuItem={item}/>}
                keyExtractor={(item) => item.name}
                ListHeaderComponent= {() => <HeaderTitle title={'Menú de Opciones'}/>}
                ItemSeparatorComponent={()=> <ItemSeparator/>}
            />
        </View>
    )
}
