import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../android/app/src/theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props) => {

    const {theme: {colors}} = useContext(ThemeContext)

    const { top } = useSafeAreaInsets();
    
    return (
        <View style={{marginTop: top + 10, marginBottom: 20}}>
            <Text style={{...styles.title, color: colors.text}}>{title}</Text>
        </View>
    )
}
