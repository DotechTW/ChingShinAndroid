import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import NavigationBar from 'react-native-navbar';
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop:25}}>
      {/* paddingTop是APP畫面最頂距離 */}
      <NavigationBar title={titleConfig} />
         <IndicatorViewPager
					style={{flex:1, backgroundColor:'white'}} indicator={this._renderTabIndicator()}>
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                    <View style={{backgroundColor:'#1A8094'}}>
                        <Text>page four</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA894'}}>
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
            text: '排行榜',
            iconSource: require('./assets/best_btn.png'),
            selectedIconSource: require('./assets/best_btn_click.png')
        },{
            text: '門市查詢',
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
  },
  TabIndicatorBtn:{
    flex: 1,
    // flexDirection: 'row',
    height: 30,
    width:30,
    // alignSelf: 'auto',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};//需要在加到title後面

const titleConfig = {
  title: '清心福全',
};
