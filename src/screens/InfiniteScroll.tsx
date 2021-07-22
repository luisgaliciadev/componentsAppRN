import React, { useState } from 'react'
import {  View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScroll = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

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
        //    <Image 
        //         source={{uri: `https://picsum.photos/id/${item}/200/300`}}
        //         style={{width: '100%', height: 400}}
        //    />
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
                        backgroundColor: 'grey', 
                        height: 150, 
                        width: '100%',
                        justifyContent: 'center', 
                        alignItems:'center'
                    }}>
                        <ActivityIndicator size={50} color="#5856D6"/>
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
