
import React, { useContext, useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';
import { styles } from '../../android/app/src/theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {theme: {colors}} = useContext(ThemeContext);
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
                        backgroundColor: colors.card,
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
                        <Text style={{color: colors.text}}>Cuerpo del modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={()=> setModalVisible(false)}
                            color={colors.primary}
                        />
                    </View>

                </View>

            </Modal>
            
           <Button
                title="Abrir Modal"
                onPress={() => setModalVisible(true)}
                color={colors.primary}
           />
        </View>
    )
}
