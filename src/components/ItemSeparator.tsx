import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ItemSeparator = () => {
    
    const {theme} = useContext(ThemeContext)

    return (
        <View 
            style={{
                borderBottomWidth: 1,
                opacity: 0.5,
                marginVertical: 5,
                borderBottomColor: theme.divideColor
            }}>  
        </View>
    )
}
