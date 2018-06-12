import React from 'react';
import { 
  WebView, 
  Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');
export default class Facebook extends React.Component {
  // 畫面最上面那條頂端列，只放入圖片，其餘在使用這個class時修改navigationOptions
  render() {
    return (
      <WebView source={{ uri: 'https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/chingshin1987/&tabs=timeline&width='+width+'&height='+(height-120)}}
        style={{flex:1 ,height: height-104 ,width: width}}/>
    );
  }
}