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
import Storage from 'react-native-storage';
import LogoTitle from './screen/LogoTitle';
import LoginScreen from './screen/LoginScreen';
import PersonScreen from './screen/PersonScreen';
import RegisterScreen from './screen/RegisterScreen';
import ScannerScreen from './screen/ScannerScreen';
import Facebook from './screen/Facebook';
import Best from './screen/Best';
import Member from './screen/Member';

// import Screen from './screen/Screen';
// import Screen from './screen/Screen';

//import { AsyncStorage } from 'react-native';
// import { Button, Card } from 'react-native-material-design' ;
//import NavigationBar from 'react-native-navbar';
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
const db = SQLite.openDatabase('db.db');
  

      class Items extends React.Component {
        state = {
          items: null,
        };
      
        componentDidMount() {
          this.update();
        }
      
        render() {
          const { items } = this.state;
          if (items === null || items.length === 0) {
            return null;
          }
      
          return (
            <View style={{ margin: 5 }}>
              {items.map(({ id, done, value }) => (
                <TouchableOpacity
                  key={id}
                  onPress={() => this.props.onPressItem && this.props.onPressItem(id)}
                  style={{
                    padding: 5,
                    backgroundColor: done ? '#aaffaa' : 'white',
                    borderColor: 'black',
                    borderWidth: 1,
                  }}>
                  <Text>{value}</Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        }
      
        update() {
          db.transaction(tx => {
            tx.executeSql(
              `select * from items where done = ?;`,
              [this.props.done ? 1 : 0],
              (_, { rows: { _array } }) => this.setState({ items: _array })
            );
          });
        }
      }
      


class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle/>,
    headerStyle: {height: 42 ,backgroundColor:'#DCDDDD'} //頂端列高度
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
    text: null,
  };


  

  componentDidMount() {
    this._getLocationAsync();
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists items (id integer primary key not null, done int, value text);'
      );
    });
    this.update();
  }
  

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
    this.update();
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
        <IndicatorViewPager style={styles.header} indicator={this.renderTabIndicator()}>
          <View >
            {/* 清心FB粉專 */}
            <Facebook/>
          </View>
          <View style={page.best}>
            {/* 排行榜圖片 */}
            <Best/>
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
      <Text>歷史紀錄</Text>
        <View style={{flexDirection: 'row', }}>
          <TextInput
            style={{
              flex: 1,
              padding: 5,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            placeholder="輸入要存入的文字" //輸入框出現的提示字
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            onSubmitEditing={() => {
              this.add(this.state.text);
              this.setState({ text: null });
            }}
          />
        </View>  
        <ScrollView>
        <View style={{  backgroundColor: 'gray', width:width, }}>
          
          <Items
            done={false}
            ref={todo => (this.todo = todo)}
            onPressItem={id =>
              db.transaction(
                tx => {
                  tx.executeSql(`update items set done = 1 where id = ?;`, [id]);
                },
                null,
                this.update
              )}
          />
          <Items
            done={true}
            ref={done => (this.done = done)}
            onPressItem={id =>
              db.transaction(
                tx => {
                  tx.executeSql(`delete from items where id = ?;`, [id]);
                },
                null,
                this.update
              )}
          />
            
          </View>
          </ScrollView>
        

            
    </View>
    
          <View style={page.member}>
            {/* 會員頁面 */}
            <Member/>
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
  add(text) {
    db.transaction(
      tx => {
        tx.executeSql('insert into items (done, value) values (0, ?)', [text]);
        tx.executeSql('select * from items', [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      this.update
    );
  }

  update = () => {
    this.todo && this.todo.update();
    this.done && this.done.update();
  };
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Scanner: ScannerScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Person:PersonScreen,
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



