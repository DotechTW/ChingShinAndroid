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
export default class RegisterScreen extends React.Component {
  // 會員註冊說明畫面
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
      <View style={{flex: 1 ,paddingTop: 10 ,backgroundColor: 'white'}}>
        <ScrollView style={{flex: 1}}>
          <View style={register.containerUp}>
            <Text style={register.title}>會員註冊說明</Text>
            <Text style={register.lighttext}>本公司遵循個人資料保護法</Text>
            {/*<CheckBox
            center
            title='Click Here'
            checked={this.state.checked}
          />
          */}  
            <Text style={register.text}>
              本會員卡服務是由清心福全及其關係企業依據以下條件提供。請您在註冊成為本公司用戶前，務必仔細閱讀本協議，一旦您註冊成為本公司用戶即表示您已經閱讀、同意並接受本協議中的所有條款。清心福全保留隨時修改本協議的權利。本協議如有任何變更，其相關變更事項將會在門市公告，所有協議內容於公告之日自動生效。如您有任何疑問，請至門市詢問服務人員，必要時您可申請刪除您的註冊用戶名稱。{'\n'}
              一、隱私政策{'\n'}
              請閱讀我們的隱私政策以瞭解我們的實務作法。{'\n'}
              二、用戶註冊{'\n'}
              為確保交易的正常進行，用戶必須向本公司提供真實、有效的個人資料。如個人資料有變動，請及時更改。用戶同意接收來自本公司或者本公司合作夥伴發出的電子郵件、簡訊、信件。用戶提交的個人資料受到我們的隱私政策保護。{'\n'}
              三、交易{'\n'}
              所有標示價格均包含加值型營業稅（依中華民國的標準稅率）。{'\n'}
              四、服務終止{'\n'}
              1. 本公司可隨時依實際情況停止一項或多項服務。本公司不需對任何個人或協力廠商負責而隨時中斷服務。用戶若反對任何服務條款或對後來的條款修改有異議，或對本公司服務不滿，可以行使如下權利：{'\n'}
              (1) 不再使用本公司服務{'\n'}
              (2) 通知本公司停止對該用戶的服務。{'\n'}
              (3) 結束用戶服務後，用戶使用本公司服務的權利馬上中止。從那時起，用戶沒有權利，本公司也沒有義務傳送任何未處理的資訊或未完成的服務給用戶或協力廠商。{'\n'}
              2. 有以下行為的用戶將被取消用戶資格{'\n'}
              (1) 違反本協議{'\n'}
              (2) 提供不實之個人資料{'\n'}
              (3) 用戶有損害本公司利益之行為{'\n'}
              (4) 違反法令規定之行為{'\n'}
              五、其它{'\n'}
              本協議的訂立、執行、解釋和爭議的解決，均應適用中華民國法律。本公司及本公司用戶雙方如對本協議在履行中發生爭執，應盡力協商解決。如協商不成而涉訟，雙方同意以臺灣高雄地方法院為第一審管轄法院。{'\n'}
            </Text>
          </View>
        </ScrollView>
        
        <View style={register.containerDown}>
          <TouchableOpacity
            style={register.btn}
            onPress={() => this.props.navigation.navigate('Person')}
          >
            <Text style={register.btntext}>同意，下一步</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    );
  }
}
const register = StyleSheet.create({
  //會員註冊說明頁面樣式
  containerUp: {
    //flex: 5,
    // flexDirection: 'column',
    paddingLeft: 20,  //框與螢幕左側距離
    paddingRight: 20, //框與螢幕右側距離
    alignItems: 'center',
    backgroundColor: 'white'
  },
  containerDown: {
    // flex: 1,
    flexDirection: 'column-reverse',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 30,
    color: '#827976',
    // width: 100,
    // height: 80,
    // alignSelf: 'stretch',
    // marginTop: 10,// 上方間隔
    //marginBottom: 15,// 下方間隔
  },
  lighttext: {
    height: 30,
    fontSize: 20,
    color: '#DADFCF',
    textAlign: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#827976',
    backgroundColor: '#827976',
    marginVertical: 10,// 上下間格
        
  },
  text: {
    fontSize: 14,
    color: '#827976',
    alignSelf: 'stretch',
    // alignItems: 'center',
    //justifyContent: 'center',
    //fontWeight: 'bold',        
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
    marginTop: 10,
    borderColor: '#6E6661',
    borderWidth: 1,
    borderRadius: 5,
                
  }
});