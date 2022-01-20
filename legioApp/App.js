import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes/Routes';
import { Provider as PaperProvider } from 'react-native-paper';
import storeConfig from './src/config/store/storeConfig'
import { Provider } from 'react-redux';
import { useFonts, Inter_900Black, Inter_200ExtraLight, Inter_100Thin, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes'
import { JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    GreatVibes_400Regular,
    JosefinSans_400Regular
  });

  const store = storeConfig()

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <PaperProvider>
          <Routes />
          <StatusBar style="auto" />
        </PaperProvider>
      </Provider>
    );
  } else {
    return <AppLoading />
  }
}

