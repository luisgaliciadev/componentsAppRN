import React, { useContext, useState } from 'react'
import {  View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfiniteScroll = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
    const {theme: {colors}} = useContext(ThemeContext);

    const loadMore = () => {
        const newArray: number[] = [];
        for(let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    }

    const renderItem = (item: number) => {
        return (
            <FadeInImage 
                uri={`https://picsum.photos/id/${item}/200/300`}
                style={{width: '100%', height: 400, borderRadius: 20}}
            ></FadeInImage>
        );
    }

    return (
        <View style={{flex:1}}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item}
                renderItem={({item}) => renderItem(item)}
                ListHeaderComponent={() => (
                    <View style={{marginHorizontal: 10}}>
                        <HeaderTitle title="InfiniteScroll"/>
                    </View>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{
                        backgroundColor: colors.background, 
                        height: 150, 
                        width: '100%',
                        justifyContent: 'center', 
                        alignItems:'center'
                    }}>
                        <ActivityIndicator size={50} color={colors.primary}/>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        height: 150
    }
});
