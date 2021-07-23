import React, { useContext, useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';


export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();
    const {theme: {colors}} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Animated.View style=
            {{...styles.purbleBox, 
                opacity: opacity, 
                transform: [
                    {translateY: position}
                ]
            }}>

            </Animated.View>

            <Button
                title='animacion In'
                onPress={() => {
                        fadeIn();
                        startMovingPosition(-100, 300);

                    }
                }
                color={colors.primary}
            />
            <Button
                title='animacion Out'
                onPress={fadeOut}
                color={colors.primary}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purbleBox: {
        backgroundColor: '#5856D9',
        width: 150,
        height: 150
    }
})
