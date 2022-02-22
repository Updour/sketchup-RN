'use strict';

import React, { Component } from 'react';

import { View, StyleSheet, Text, Button, StatusBar, Image } from "react-native";
import NetInfo, {NetInfoSubscription, NetInfoState} from "@react-native-community/netinfo"
import { WebView } from 'react-native-webview';


export default class Web extends Component {

  state = {
    isConnected: null,
  };

  componentDidMount() {
    this._subscription = NetInfo.addEventListener(
      this._handleConnectivityChange,
    );
  }

  componentWillUnmount() {
    this._subscription && this._subscription();
  }

  _handleConnectivityChange = (state: NetInfoState) => {
    this.setState({
      isConnected: state.isConnected,
    });
  };

  render() {
    return (
      <>
          {
            this.state.isConnected ? 
            <View style={{ flex: 1 }}>
              <WebView source={{ uri: 'https://member.codev.one/login' }}  />  
              <StatusBar translucent={true} backgroundColor={'transparent'} />
            </View>
            : 
            <View style={{ flex: 1 }}>
              <Image source={require('./inet.jpg')} alt="Alternate Text" style={{ flex: 1, alignSelf: 'center'  }}/>
              <StatusBar translucent={true} backgroundColor={'transparent'}/>
            </View> 
          }
       </>
    );
  }
}

const styles = StyleSheet.create({

});
