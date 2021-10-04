import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Routes from './src/routes/Routes';
import { Provider as PaperProvider } from 'react-native-paper';

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

      'WorkSans-Bold': {
        uri: require('./assets/fonts/WorkSans-Bold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

      'WorkSans-ExtraLight': {
        uri: require('./assets/fonts/WorkSans-ExtraLight.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

      'WorkSans-Italic': {
        uri: require('./assets/fonts/WorkSans-Italic.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

      'WorkSans-Light': {
        uri: require('./assets/fonts/WorkSans-Light.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

      'WorkSans-Medium': {
        uri: require('./assets/fonts/WorkSans-Medium.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

      'WorkSans-Regular': {
        uri: require('./assets/fonts/WorkSans-Regular.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

      'WorkSans-SemiBold': {
        uri: require('./assets/fonts/WorkSans-SemiBold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    })
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <PaperProvider>
          <Routes />
          <StatusBar style="auto" />
        </PaperProvider>
      );
    } else {
      return <AppLoading />
    }
  }
}

