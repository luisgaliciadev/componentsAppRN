import { Theme } from "@react-navigation/native"

type ThemeAction = 
    {type: 'set_light_theme'} |
    {type: 'set_dark_theme'} 

export interface ThemeState extends Theme {
     currentTheme: 'light' | 'dark',
     divideColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    divideColor: 'grey',
    colors: {
        primary: '#1885FA',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'white',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    divideColor: 'grey',
    colors: {
        primary: 'grey',
        background: 'black',
        card: 'grey',
        text: 'white',
        border: 'black',
        notification: 'grey',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
          return {
              ...lightTheme
          }

        case 'set_dark_theme':
          return {
              ...darkTheme
          }

        default:
            return state;
    }
}