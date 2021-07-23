import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../android/app/src/theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ThemeScreen = () => {
    const {setDarkTheme, setLightTheme, theme: {colors}} = useContext(ThemeContext)
    return (
        <View style={styles.globalMargin}>
            
            <HeaderTitle title="Configuración de Tema"/>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}
                    onPress={setLightTheme}
                    activeOpacity={0.7}
                >
                    <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 25
                        }}
                    >
                        Light</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}
                    onPress={setDarkTheme}
                    activeOpacity={0.7}
                >
                    <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 25
                        }}
                    >
                        Dark</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
