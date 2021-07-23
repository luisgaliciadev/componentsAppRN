import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefresh } from '../screens/PullToRefresh';
import { CustomSectionList } from '../screens/CustomSectionList';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScroll } from '../screens/InfiniteScroll';
import { SlideScreen } from '../screens/SlideScreen';
import { ThemeScreen } from '../screens/ThemeScreen';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { View } from 'react-native';




const Stack = createStackNavigator();

export const Navigator = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <View
      style={{flex: 1, backgroundColor: theme.colors.background}}
    >
      <NavigationContainer
          theme={ theme }
      >
        <Stack.Navigator
            screenOptions={{
                headerShown: true, // Quitar header de screens
                cardStyle: {
                  // backgroundColor: 'white'
                }
            }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
          <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
          <Stack.Screen name="CustomSectionList" component={CustomSectionList} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="InfiniteScroll" component={InfiniteScroll} />
          <Stack.Screen name="SlideScreen" component={SlideScreen} />
          <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}