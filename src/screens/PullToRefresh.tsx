import React  from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { styles } from '../../android/app/src/theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const PullToRefresh = () => {

    const {top} = useSafeAreaInsets();
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(()=> {
           console.log('Termino');
           setRefreshing(false);
           setData('Hola Mundo');
        }, 2000);
    }

    return (
        <ScrollView
            style={{marginTop: refreshing ? top : 0}} // Para telefono con notch 
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh= {onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={['white', 'red','blue','green']}
                    title="Cargando..." //IOS
                    tintColor='white'  // IOS
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to refresh"/>
                {
                    data && <HeaderTitle title={data}></HeaderTitle>
                } 
            </View>
        </ScrollView>
    )
}
