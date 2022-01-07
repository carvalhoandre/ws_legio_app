import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Routes from './src/routes/Routes';
import { Provider as PaperProvider } from 'react-native-paper';
import storeConfig from './src/config/store/storeConfig'
import { Provider } from 'react-redux';
import { useFonts, Inter_900Black, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';

export default class App extends Component {

  state = {
    fontsLoaded: false
  };

  async loadFonts() {
    await Font.loadAsync({

      'Old English Text MT': {
        uri: require('./assets/fonts/OldEnglishTextMT.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

      'WorkSans': {
        uri: require('./assets/fonts/WorkSans-Regular.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    })

    useFonts({
      Inter_900Black,
      Inter_100Thin, 
      Inter_200ExtraLight, 
      Inter_300Light, 
      Inter_400Regular, 
      Inter_500Medium, 
      Inter_600SemiBold, 
      Inter_700Bold, 
      Inter_800ExtraBold
    });

    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const store = storeConfig()

    if (this.state.fontsLoaded) {
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
}

