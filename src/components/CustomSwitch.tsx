import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ( {isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    const {theme: {colors}} = useContext(ThemeContext);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled)
    };
    
    return (
        <Switch
            trackColor={{ false: colors.primary, true: "#5856D6" }}
            thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
