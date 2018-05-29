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
} from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';
//import NavigationBar from 'react-native-navbar';
import { Button, Header, Icon, ListItem } from 'react-native-elements';
import { BarCodeScanner, Permissions, MapView , Location , Constants } from 'expo';
// import MapView from 'expo';
// import { Button, Card } from 'react-native-material-design' ;
// import {Dimensions} from 'react-native' ;
// 裝置長寬
const { height, width } = Dimensions.get('window');
const list = [
  {
    name: '988 公園店',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '台南市北區公園路822-1號',
  },
  {
    name: '100 育德店',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '台南市北區育德路520號',
  },
  {
    name: '301 四平店',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '台中市北屯區后庄路71-3號',
  },
  {
    name: '358 北平店',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '台中市北屯區北平區三段151號',
  },
  {
    name: '456 后庄店',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '台中市北屯區后庄路22號',
  },
  {
    name: '456 后庄店',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '台中市北屯區后庄路22號',
  },
  {
    name: '456 后庄店',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '台中市北屯區后庄路22號',
  },
  {
    name: '456 后庄店',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '台中市北屯區后庄路22號',
  },
    

];


class LogoTitle extends React.Component {
  // 畫面最上面那條頂端列，只放入圖片，其餘在使用這個class時修改navigationOptions
  render() {
    return (
      <Image
        source={require('./assets/title_background.png')}
        style={{ width: 50, height: 30 , flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          resizeMode: Image.resizeMode.center}}
      />
    );
  }
}
class LoginScreen extends React.Component {
  // 登入畫面
  constructor(props) {
    super(props);
    this.state = { text: '0912456789' };
  }
  render() {
    return (
      <View style={{flex: 1 ,alignItems: 'center', backgroundColor:'white' ,}}>
        <View style={{flex: 1,alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{flex: 1, fontSize: 30, alignItems: 'center', justifyContent: 'center', }}>
            會員登入
          </Text>
        </View>
        <View style={{flex: 2,}}>
          <Text style={{fontSize: 15,  }}>
            手機號碼Phone
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 0}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Text style={{fontSize: 15, }}>
            密碼Password
          </Text>
        </View>
        <Button
          buttonStyle={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 50,
                  borderColor: '#6E6661',
                  borderWidth: 1,
                  borderRadius: 5,
                }}
          title="掃描集點"
          fontSize={20}
          color="#6E6661"
          // 按鈕
          onPress={() => this.props.navigation.navigate('Scanner')}
        />


      </View>


    );
  }
}
class RegisterScreen extends React.Component {
  // 註冊畫面
  render() {
    return (
      <View style={{flex: 1 ,alignItems: 'center', justifyContent: 'center', backgroundColor:'white',}} >
        <Text style={{flex: 1, fontSize: 30, }}>
          註冊登入
        </Text>
      </View>


    );
  }
}


class ScannerScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle/>,
    headerStyle: {height: 30 ,backgroundColor:'#DCDDDD'} //頂端列高度
  };
  constructor(props){
    super(props);
    this.state={
      scannedBarcodeData: 'none',
      numBarcodesScanned: 0,
      hasCameraPermission: null,
    };

  }
  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    const { goBack, state } = this.props.navigation;
    goBack();
    //掃描後返回上一頁面

    
    const newBarcodeDataCandidate = JSON.stringify(data);
    const barcodeJustSeen =
      newBarcodeDataCandidate === this.state.scannedBarcodeData;
    if (!barcodeJustSeen) {
      this.setState({
        scannedBarcodeData: newBarcodeDataCandidate,
        numBarcodesScanned: this.state.numBarcodesScanned + 1,
      });
    }
    // Alert.alert(
    //   'Scan successful!',
    //   JSON.stringify(data)
    // );
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data),
      [
        {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: '確定', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    // onPress={() => this.props.navigation.navigate('Scanner')}
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 300, width: 300 }}//
            />
        }
      </View>
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle/>,
    headerStyle: {height: 30 ,backgroundColor:'#DCDDDD'} //頂端列高度
  };
  state = {
    mapRegion: { 
      latitude: 24.175400, 
      longitude: 120.690504, 
      latitudeDelta: 0.05, 
      longitudeDelta: 0.05, 
    },
    locationResult: null,
    location: {coords: { latitude: 24.175400, longitude: 120.690504}},
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: '讀取位置的權限被拒絕',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
 };

 //按下按鈕後彈出視窗
  onPressButton() {
    Alert.alert('你已經按下按鈕囉');
  }

  render() {

    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (

      <View style={{ flex: 1, paddingTop: 0, backgroundColor: '#DCDDDD' }}>
        {/*<Image source={require('./assets/title_background.png')} style={styles.headerImg} />*/}
        {/* paddingTop是APP畫面最頂距離 */}
        {/* <NavigationBar title={titleConfig}/> */}
        <IndicatorViewPager style={styles.header} indicator={this.renderTabIndicator()}>
      <View >
        
      {/* <Text>鑲入清心FB粉絲團網頁</Text> */}
      <WebView source={{ uri: 'https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/chingshin1987/&tabs=timeline&width='+width+'&height='+height }}
							 style={{flex:1}}
							// scalesPageToFit={true}
						/>
    </View>
      <View style={page.best}>
      <Image source={require('./assets/activity.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-120 ,resizeMode: Image.resizeMode.stretch }} />
      {/* 這裡要調圖片大小 這張圖480*650* 384*520 */}

    </View>
    <View style={page.check}>
      <MapView
        style={{ flex:1 }}
            region={{ 
              latitude: this.state.location.coords.latitude, 
              longitude: this.state.location.coords.longitude, 
              latitudeDelta: 0.05, 
              longitudeDelta: 0.05 
            }}
          //onRegionChange={this._handleMapRegionChange}//鎖定不讓使用者移動
			>
        <MapView.Marker
          coordinate={this.state.location.coords}
          title="我的位置"
          //description="Some description"
        />
      </MapView>
      {/* // 塞入itemlist做附近店面列表   */}
      <ScrollView style={{flex: 1}}>
        {
          list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
          />
          ))
        }
      </ScrollView>

      {/* 這是google map API金鑰 AIzaSyD74INcdDqbZOxTy_OM3qnxg9BCEYK7UTU */}


    </View>
      <View style={page.notice}>
      <Text style={{ fontSize: 30 }}>2018 集點活動</Text>
      <Image source={require('./assets/banner-72.png')} style={{ width: Dimensions.get('window').width, height: 130,resizeMode: Image.resizeMode.stretch }} />
      <Text />
      <Button
        buttonStyle={{
								backgroundColor: 'white',
								width: 150,
								height: 50,
								borderColor: '#6E6661',
								borderWidth: 1,
								borderRadius: 5,
							}}
        title="掃描集點"
        fontSize={20}
        color="#6E6661"
			  // 按鈕
        onPress={() => this.props.navigation.navigate('Scanner')}
      />
      
        
        <Text>
          Most recent barcode: {this.state.scannedBarcodeData}
        </Text>

        
        <Text>
          Number of scans: {this.state.numBarcodesScanned}
        </Text>

            
    </View>
    {/* <Text>會員頁面</Text> */}
      <View style={page.member}>
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
      <Text />
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

							// icon={{name: 'code'}}
      title="忘記密碼"
  />
      
    </View>
    </IndicatorViewPager>
      </View>
    );
  }
  renderTabIndicator() {
    // 首頁、排行榜、門市查詢、通知、會員
    // index、best、check、notice、member
    // * 下方按鈕色碼 (灰色)#595656 (綠色)#B4B51F
    const tabs = [{
      text: '首頁',
      iconSource: require('./assets/index_btn.png'),
      selectedIconSource: require('./assets/index_btn_click.png'),
    }, {
      text: '排行',
      iconSource: require('./assets/best_btn.png'),
      selectedIconSource: require('./assets/best_btn_click.png'),
    }, {
      text: '門市',
      iconSource: require('./assets/check_btn.png'),
      selectedIconSource: require('./assets/check_btn_click.png'),
    }, {
      text: '通知',
      iconSource: require('./assets/notice_btn.png'),
      selectedIconSource: require('./assets/notice_btn_click.png'),
    }, {
      text: '會員',
      iconSource: require('./assets/member_btn.png'),
      selectedIconSource: require('./assets/member_btn_click.png'),
    }];
    return <PagerTabIndicator tabs={tabs} />;
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Scanner: ScannerScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Home',
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#DCDDDD',
    //   },
    // },
    // navigationOptions的style已寫到logo title在其中修改就好
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  headerImg: {
    // 最上面的那條
    height: 34,
    width: 153,
    // backgroundColor:'#F6F6F6',
    //  alignItems: 'center',
    alignItems: 'center',
    marginLeft: '27%', // 頂端列圖片置中
  },
  header: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});


// 頁面樣式index、best、check、notice、member
const page = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: 'cadetblue',
  },
  best: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AED49D',
    // resizeMode :'center'
  },
  check: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'#1AA094',
  },
  notice: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'#1A8094',
  },
  member: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});





const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};// 需要在加到title後面

const titleConfig = {
  title: '清心福全',
  // icon: require('./assets/title_background.png'),
};
// 1534*338  306*67

