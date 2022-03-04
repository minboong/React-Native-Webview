import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


class MyWebComponent extends Component {
  render() {
    return <WebView source={{ uri: 'https://blog.naver.com/mj7392' }} />;
  }
}

export default MyWebComponent;