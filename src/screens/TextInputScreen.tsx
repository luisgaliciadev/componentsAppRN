import React, { useContext, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { styles } from '../../android/app/src/theme/appTheme';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';


export const TextInputScreen = () => {

    const {form, onChange, isSubscribed} = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });
    const {theme: {colors}} = useContext(ThemeContext);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="Text Input"/>

                        <TextInput
                            style={{
                                ...stylesLocal.input, 
                               borderColor: colors.text,
                               color: colors.text,
                               backgroundColor: colors.card
                            }}
                            placeholder={"Nombre"}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor={colors.text}
                        />

                        <TextInput
                            style={{
                                ...stylesLocal.input, 
                               borderColor: colors.text,
                               color: colors.text,
                               backgroundColor: colors.card
                            }}
                            placeholder={"Email"}
                            autoCorrect={false}
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                            placeholderTextColor={colors.text}
                        />

                        <TextInput
                            style={{
                                ...stylesLocal.input, 
                               borderColor: colors.text,
                               color: colors.text,
                               backgroundColor: colors.card
                            }}
                            placeholder={"Telefono"}
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="numeric"
                            placeholderTextColor={colors.text}
                        />

                        <View style={stylesLocal.container}>
                            <Text style={{...stylesLocal.switchText, color: colors.text}}>Supscribirme</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')}/> 
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)}/>
                        
                        <View style={{height: 100}}></View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesLocal = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10
    },
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
