import React from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

import prompt from 'react-native-prompt-android';
import { styles } from '../../android/app/src/theme/appTheme';

export const AlertScreen = () => {

    const showAlert2Button = () => {
        Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        {
            cancelable: true,
            onDismiss: ()=>console.log('dissmis')
        }
        );
    }

    const showAlert3Button = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed")
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
    
            ]
        );
    }

    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alertas"/>

            <Button
                title="Mostrar Alerta 2 Botones"
                onPress={showAlert2Button}
            />

            <Button
                title="Mostrar Alerta 3 Botones"
                onPress={showAlert3Button}
            />

            <Button
                title="Mostrar Prompt"
                onPress={showPrompt}
            />
        </View>
    )
}


