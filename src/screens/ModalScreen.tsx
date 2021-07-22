
import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';
import { styles } from '../../android/app/src/theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

export const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal"/>

            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
            >
                <View style={{
                        flex:1, 
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 18
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 20                 
                    }}>
                        <HeaderTitle title="Modal"/>
                        <Text>Cuerpo del modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={()=> setModalVisible(false)}
                        />
                    </View>

                </View>

            </Modal>
            
           <Button
                title="Abrir Modal"
                onPress={() => setModalVisible(true)}
           />
        </View>
    )
}
