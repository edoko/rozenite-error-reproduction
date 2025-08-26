/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import useRozenite from '../hooks/useRozenite';
import '../styles/global.css';

import { NewAppScreen } from '@react-native/new-app-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar, useColorScheme, View } from 'react-native';

const queryClient = new QueryClient();

function App() {
  useRozenite({ queryClient });

  const isDarkMode = useColorScheme() === 'dark';

  return (
   <QueryClientProvider client={queryClient}>
     <View className="flex-1">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
   </QueryClientProvider>
  );
}


export default App;
