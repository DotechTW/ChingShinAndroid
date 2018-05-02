import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,Linking,WebView } from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import NavigationBar from 'react-native-navbar';
import { Button,Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop:25}}>
      {/* paddingTop是APP畫面最頂距離 */}
      <NavigationBar title={titleConfig}/>
         <IndicatorViewPager style={styles.header} indicator={this._renderTabIndicator()}>
                    <View style={styles.page1}>
                        {/* <Text>鑲入清心FB粉絲團網頁</Text> */}
                        <WebView source={{uri: 'https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/chingshin1987/&tabs=timeline&width=380&height=600'}}
                            // style={{height: '100%',width:'100%'}}
                            // scalesPageToFit={true}
                          /> 
                    </View>
                    <View style={styles.page2}>
                        <Image source={require('./assets/activity.png')} style={{width: 384, height: 520}}/>
                        {/* 這裡要調圖片大小 這張圖480*650*/}
                        {/* <Text>page two</Text> */}
                    </View>
                    <View style={styles.page3}>
                        <Text>page three</Text>
                    </View>
                    <View style={styles.page4}>
                        <Text>page four</Text>
                        
                    </View>
                    <View style={styles.page5}>
                        <Text>page five</Text>
                    </View>
                </IndicatorViewPager>
      </View>
    );
  }
  _renderTabIndicator() {
            // 首頁、排行榜、門市查詢、通知、會員
            // * 下方按鈕色碼 (灰色)#595656 (綠色)#B4B51F
    let tabs = [{
            text: '首頁',
            iconSource: require('./assets/index_btn.png') ,
            selectedIconSource: require('./assets/index_btn_click.png'),
        },{
            text: '排行',
            iconSource: require('./assets/best_btn.png'),
            selectedIconSource: require('./assets/best_btn_click.png')
        },{
            text: '門市',
            iconSource: require('./assets/check_btn.png'),
            selectedIconSource: require('./assets/check_btn_click.png')
        },{
            text: '通知',
            iconSource: require('./assets/notice_btn.png'),
            selectedIconSource: require('./assets/notice_btn_click.png')
        },{
            text: '會員',
            iconSource: require('./assets/member_btn.png'),
            selectedIconSource: require('./assets/member_btn_click.png')
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
  },centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },textBold: {
    fontWeight: '500',
    color: '#000',
  },buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },buttonTouchable: {
    padding: 16,
  },header:{
    flex:1,
    backgroundColor:'#F6F6F6',
    
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'cadetblue',
  },page1:{
    flex:1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'cadetblue',
  },page2:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'cornflowerblue',
    // resizeMode :'cover'

  },page3:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1AA094',
  },page4:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1A8094',
  },page5:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1AA894',
  },
});

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};//需要在加到title後面

const titleConfig = {
  title: '清心福全',
  icon: require('./assets/title_background.png'),
};
