import React, { useContext, useRef, useState } from 'react'
import { ImageSourcePropType, View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';

import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';

// Dimensiones de la pantalla
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

interface Props extends StackScreenProps<any, any> {};

export const SlideScreen = ({ navigation }: Props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const {opacity, fadeIn} = useAnimation();
    const isVisible = useRef(false);
    const {theme: {colors}} = useContext(ThemeContext);

    const renderItem = (item: Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    justifyContent: 'center'
                }}
            >
                <Image
                    style={{width: 350, height: 400, resizeMode: 'center'}}
                    source={item.img}
                />
                <Text style={{...styles.title,  color: colors.primary}}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.desc}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50
            }}
        >
             
            <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={items}
              renderItem={ ({item}) => renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenHeight}
              layout="default"
              onSnapToItem={(index)=> {
                console.log(index);
                setActiveIndex(index);
                if (index === items.length - 1) {
                    isVisible.current = true;
                    fadeIn();
                }
              }}
            />

            <View 
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    alignItems: 'center'
                }}
            >
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotContainerStyle= {{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: colors.primary
                    }}
                />

                <Animated.View
                    style={{opacity: opacity}}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            backgroundColor: colors.primary,
                            width: 130,
                            height: 50,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        activeOpacity={0.7}
                        onPress={() => {
                            if(isVisible.current) {
                                navigation.navigate('HomeScreen');
                            }
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: colors.text
                            }}
                        >Entrar</Text>
                        <IonicIcon name="chevron-forward-outline" size={30} color={colors.text} />
                    </TouchableOpacity>
                </Animated.View>
                         
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16
    }
})