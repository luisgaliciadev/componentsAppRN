import React, { useEffect, useReducer } from 'react';
import { createContext } from "react";
import { Appearance, AppState } from 'react-native';
import { useColorScheme } from 'react-native';
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;

}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {

    // const colorScheme = useColorScheme();

    // Solo funciona en IOS
    // useEffect(() => {
    //    (colorScheme === 'light')
    //     ? setLightTheme()
    //     : setDarkTheme();
    // }, [colorScheme])

    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme))  // Leer tema global del telefono

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                 ? setLightTheme()
                 : setDarkTheme();
            }
        })
    }, [])

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'})
        console.log('set dark theme');
    }

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'})
        console.log('set light theme');
    }
    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme, 
                setLightTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}