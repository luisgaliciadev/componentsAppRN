import React, { useContext, useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {

    const {opacity, fadeIn} = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    const {theme: {colors}} = useContext(ThemeContext);

    return (
        <View
            style={{justifyContent: 'center', alignItems: 'center'}}
        >
            {
                isLoading && <ActivityIndicator style={{position: 'absolute'}} size={30} color={colors.primary}/>
            }
            <Animated.Image
                source = {{uri}}
                onLoadEnd={() => fadeIn(500)}
                style={{
                    ...style as any,
                    opacity
                }}
            >
            </Animated.Image>
        </View>
    )
}
