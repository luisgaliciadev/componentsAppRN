import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { onChange } from 'react-native-reanimated';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });
    const {theme: {colors}} = useContext(ThemeContext);

    const onChange = (value: boolean, field: string) => {
        setstate({
            ...state,
            [field]: value
        })
    }
    

    return (
        <View style={{marginTop: 0}}>
            <HeaderTitle title='Switchs'/>

            <View style={styles.container}>
                <Text style={{...styles.switchText, color: colors.text}}>Is Active</Text>
                <CustomSwitch isOn={state.isActive} onChange={(value) => onChange(value, 'isActive')}/> 
            </View>

            <View style={styles.container}>
                <Text style={{...styles.switchText, color: colors.text}}>Is Hungry</Text>
                <CustomSwitch isOn={state.isHungry} onChange={(value) => onChange(value, 'isHungry')}/> 
            </View>

            <View style={styles.container}>
                <Text style={{...styles.switchText, color: colors.text}}>Is Happy</Text>
                <CustomSwitch isOn={state.isHappy} onChange={(value) => onChange(value, 'isHappy')}/> 
            </View>

            <Text style={{...styles.switchText, color: colors.text}}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginVertical: 10

    },
    switchText: {
        fontSize: 25
    }
});
