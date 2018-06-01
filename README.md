# chingshinRN
## 清心App
* 抓圖
* 功能釐清
* 樹狀圖

## 畫面
* 畫面配置(架構)
* 首頁、排行榜、門市查詢、通知、會員
* 下方按鈕色碼 (灰色)#DCDDDD (綠色)#B4B51F
* 圖片自動縮放
![清心App總覽](/清心APP總覽.png)

# React Native專案使用物件
 * [Navigation Bar](https://github.com/react-native-community/react-native-navbar)
 * [React-Native-ViewPager](https://github.com/zbtang/React-Native-ViewPager)
 * [flux](https://ithelp.ithome.com.tw/articles/10188232)
 * [24 小時，React 快速入門](https://github.com/liscott327/react-quick-tutorial)
 * [Hello JS - JavaScript 全端開發即戰力班](https://github.com/liscott327/hellojs-gitbook)
 * [清心內鑲FB](https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/chingshin1987/&tabs=timeline&width=)
 * [React Native Material UI](https://github.com/xotahal/react-native-material-ui)
 * [色碼表](https://www.toodoo.com/db/color.html)
 * [輸出APK](https://stackoverflow.com/questions/44301539/react-native-generate-apk-and-ipa-using-expo)
 * [地理位置](https://facebook.github.io/react-native/docs/geolocation.html)
 * [QRCode範例](https://snack.expo.io/BJlFFcp2g)
 * [Button](https://react-native-training.github.io/react-native-elements/docs/button.html)
 * [按下按鈕alert顯示](http://a091234765.pixnet.net/blog/post/400293398-%5B%E7%AD%86%E8%A8%98%5Dreact-native%E4%B9%8B%E8%A7%B8%E6%8E%A7%E8%99%95%E7%90%86%E4%B9%8B%E4%B8%80%3Cbutton%3E)
 
* [下載apk](https://expo.io/@liscott327/chinshinrn/builds)



## 重點註記:
 - `paddingTop`是APP畫面與最頂距離(包含狀態列)
 - 改下方按鈕底色`...\expo test\chinshinrn\node_modules\rn-viewpager\viewpager\indicator\PagerTabIndicator.j`

 - `alignItems: 'center'`是水平置中
 - `justifyContent: 'center'`是垂直置中
 - QRCode震動路徑`node_modules\react-native\ReactAndroid\src\main`
 - 輸出指令apk`exp ba`
 - 按下按鈕後彈出Alert
 ```jsx
 onPressButton() {
        Alert.alert(
        'Scan successful!',
        JSON.stringify(data)
        ); 
        }
```
- 增加頁面並轉跳
    * 建立頁面的`class`
    ```JSX
    class <Name> extends React.Component{
        //內容
    }
    ```
    * 加入進入頁面方式
        `ex.按下按鈕>轉跳>進入頁面`
        ```JSX
        onPress={() => this.props.navigation.navigate('Scanner')}
        ```
    * 加入目錄頁面位置關聯
        ```JSX
        const RootStack = createStackNavigator(
            {
                Home: HomeScreen,
                Scanner: ScannerScreen,
                Login: LoginScreen,
                Register: RegisterScreen,
            },
            {
                initialRouteName: 'Home',
            }
        );
        ```
* `padding`=元件內縮
* `margin`=元件外闊
