/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import '../styles/global.css';

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, useColorScheme, View } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className="flex-1">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}


export default App;
