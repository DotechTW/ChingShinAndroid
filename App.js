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
} from 'react-native';

import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';
import NavigationBar from 'react-native-navbar';
import { Button, Header, Icon, ListItem } from 'react-native-elements';
import { BarCodeScanner, Permissions, MapView } from 'expo';
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

];




export default class App extends React.Component {
  // getInitialState() {
  //   return {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //   };
  // }

  // onRegionChange(region) {
  //   this.setState({ region });
  // }

  onPressButton() {
    Alert.alert('你已經按下按鈕囉');
  }


  render() {
    return (

      <View style={{ flex: 1, paddingTop: 25, backgroundColor: '#DCDDDD' }}>
        <Image source={require('./assets/title_background.png')} style={styles.headerImg} />
        {/* paddingTop是APP畫面最頂距離 */}
        {/* <NavigationBar title={titleConfig}/> */}
        <IndicatorViewPager style={styles.header} indicator={this.renderTabIndicator()}>
      <View style={page.index}>
        
      {/* <Text>鑲入清心FB粉絲團網頁</Text> */}
      <WebView source={{ uri: 'https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/chingshin1987/&tabs=timeline&width=' }}
							// style={{height: '100%',width:'100%'}}
							// scalesPageToFit={true}
						/>
    </View>
      <View style={page.best}>
      <Image source={require('./assets/activity.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-120 ,resizeMode: Image.resizeMode.stretch }} />
      {/* 這裡要調圖片大小 這張圖480*650* 384*520 */}

    </View>
      <View style={page.check}>
      {/* <MapView
         region={this.state.region}SS
         onRegionChange={this.onRegionChange}
       /> */}

      <MapView
      style={{ flex: 1 }}
      initialRegion={{
								latitude: 24.175373,
								longitude: 120.690486,
								latitudeDelta: 0.005,
								longitudeDelta: 0.005,
							}}
						/>

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
      onPress={this.onPressButton}


						/>
    </View>
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
      {/* <Text>會員頁面</Text> */}
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
