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
export default class PersonScreen extends React.Component {
  // 註冊輸入個資畫面
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle/>,
    headerStyle: {height: 42 ,backgroundColor:'#DCDDDD',}, //頂端列高度
    headerRight: <View></View>,
    // headerLeft:  <Icon name={'chevron-left'} onPress={() => console.log('返回')} />,
  };
  // constructor(props){
  //   super(props);
  //   this.state={
  //     checked:{false},
  //   }};
  render() {
    return (
      <ScrollView 
        contentContainerStyle={{flex:1}}
        // keyboardDismissMode='on-drag'
        // //keyboardShouldPersistTaps={false}
      >
        <View style={person.containerUp}>
          <Text style={person.title}>個人資料 <Text style={{color: 'red' ,fontSize: 14}}>*必填</Text></Text>
          <Text style={{color: 'black' ,fontSize: 14}}>(為維護用戶權益，請確認所有資訊填寫正確)</Text>
          
          <Text style={person.text}>姓名Name <Text style={{color: 'red' ,fontSize: 14}}>*</Text></Text>
          <TextInput 
            style={person.lighttext} 
            placeholder="王大明"
            underlineColorAndroid='transparent'
          />
          
          <Text style={person.text}>性別Gender <Text style={{color: 'red' ,fontSize: 14}}>*</Text></Text>
          <TextInput 
            style={person.lighttext} 
            placeholder="男"
            underlineColorAndroid='transparent'
          />
            
          <Text style={person.text}>手機號碼Phone <Text style={{color: 'red' ,fontSize: 14}}>*</Text></Text>
          <TextInput 
            style={person.lighttext} 
            placeholder="0912345678"
            underlineColorAndroid='transparent'
          />
            
          <Text style={person.text}>生日Date of Birth</Text>
          <TextInput 
            style={person.lighttext} 
            placeholder="yyyy/mm/dd"
            underlineColorAndroid='transparent'
          />
          
          <Text style={person.text}>電子信箱E-mail <Text style={{color: 'red' ,fontSize: 14}}>*</Text></Text>
          <TextInput 
            style={person.lighttext} 
            placeholder="abc@gmail.com"
            underlineColorAndroid='transparent'
          />
            
          
          <TouchableOpacity
            style={person.btn}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={person.btntext}>送出</Text>
          </TouchableOpacity>
          
          
          
        </View>
      </ScrollView>
    );
  }
}
const person = StyleSheet.create({
  //註冊輸入個資頁面樣式
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
    marginTop: 10,
    // width: 100,
    // height: 80,
    // alignSelf: 'stretch',
    // marginBottom: 10,
  },
  lighttext: {
    //marginTop: 10,
    height: 44,
    alignSelf: 'stretch',
    // justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#827976',
  },
  text: {
    alignSelf: 'stretch',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 5, 
    fontSize: 14,
        
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
    marginTop: 10,
    borderColor: '#6E6661',
    borderWidth: 1,
    borderRadius: 5,
                
  }
});