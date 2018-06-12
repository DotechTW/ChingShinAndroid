import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  WebView,
  Dimensions,
  LayoutAnimation,
  StatusBar,
  Alert,
  ScrollView,
  Platform,
  TextInput,
  AsyncStorage,
} from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';
import { Button, Header, Icon, ListItem, CheckBox  } from 'react-native-elements';
import { BarCodeScanner, Permissions, MapView , Location , Constants , Expo, SQLite,  } from 'expo';
export default class Member extends React.Component {
  // 畫面最上面那條頂端列，只放入圖片，其餘在使用這個class時修改navigationOptions
  render() {
    return (
      <View>
        <Button
          buttonStyle={{
            backgroundColor: 'white',
            width: 200,
            height: 70,
            borderColor: '#6E6661',
            borderWidth: 1,
            borderRadius: 5,
          }}
          title="登入"
          fontSize={30}
          color="#6E6661"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        
        <Button
          buttonStyle={{
            backgroundColor: 'white',
            width: 200,
            height: 70,
            borderColor: '#6E6661',
            borderWidth: 1,
            borderRadius: 5,
          }}
          title="註冊"
          fontSize={30}
          color="#6E6661"
          onPress={() => this.props.navigation.navigate('Register')}
        />
        <Text />
        <Button
          color="#444444"
          backgroundColor="#FFFFFF"
          borderRadiusColor="#444444"
          borderRadius={10}
          fontSize={15}
          title="忘記密碼"
        />
      </View>
    );
  }
}