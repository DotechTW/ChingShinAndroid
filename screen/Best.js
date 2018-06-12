import React from 'react';
import {
  Image,
  Dimensions,
} from 'react-native';
// const { height, width } = Dimensions.get('window');
export default class Best extends React.Component {
  // 畫面最上面那條頂端列，只放入圖片，其餘在使用這個class時修改navigationOptions
  render() {
    return (
      <Image source={require('../assets/activity.png')} 
        style={{ 
          width: Dimensions.get('window').width, 
          height: Dimensions.get('window').height-120 ,
          resizeMode: Image.resizeMode.stretch }} />
    );
  }
}