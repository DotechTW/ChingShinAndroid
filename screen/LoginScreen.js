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
import LogoTitle from './LogoTitle';
export default class LoginScreen extends React.Component {
  // 登入畫面
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle/>,
    headerStyle: {height: 42 ,backgroundColor:'#DCDDDD',}, //頂端列高度
    headerRight: <View></View>,
    // headerLeft:  <Icon name={'chevron-left'} onPress={() => console.log('返回')} />,
  };
  
  //constructor(props) {
  //   super(props);
  //   this.state = { text: '0912456789' };
  // }
  render() {
    return (
      <ScrollView 
      contentContainerStyle={{flex:1}}
      keyboardDismissMode='on-drag'
      //keyboardShouldPersistTaps={false}
      >
      <View style={login.containerUp}>
        <Text style={login.title}>會員登入</Text>
        <Text style={login.text}>手機號碼Phone</Text>
        <TextInput
          underlineColorAndroid='transparent'
          ref={(username) => this.username = username}
          onFocus={() => this.username.focus()}
          style={login.input}
          placeholder='0912345678'/>
        <Text style={login.text}>密碼Password</Text>
        <TextInput 
          underlineColorAndroid='transparent'
          ref={(password) => this.password = password}
          onFocus={() => this.password.focus()}
          style={login.input}
          placeholder='abc@gmail.com'
          password={true}/>
      </View>
      <View style={login.containerDown}>  
        <TouchableOpacity
          style={login.btn}
          onPress={() => this.props.navigation.navigate('Home')}
          >
          <Text style={login.btntext}>確認送出</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
}

    const login = StyleSheet.create({
      //登入頁面樣式
      containerUp: {
        flex: 1,
        paddingLeft: 20,  //框與螢幕左側距離
        paddingRight: 20, //框與螢幕右側距離
        alignItems: 'center',
        backgroundColor: 'white'
      },
      containerDown: {
        flex: 1,
        flexDirection: 'column-reverse',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: 'white'
      },
      title: {
        fontSize: 30,
        // width: 100,
        // height: 80,
        // alignSelf: 'stretch',
        margin: 30,
      },
      input: {
        //marginTop: 10,
        height: 44,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#6E6661',
      },
      text: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        //fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5,
        //height: 20,
      },
      btntext: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#6E6661'
      },
      btn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 44,
        borderRadius: 5,
        marginBottom: 20,
        //marginBotton: 20,
        borderColor: '#6E6661',
				borderWidth: 1,
				borderRadius: 5,
								
      }
      });
