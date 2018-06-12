import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BarCodeScanner, Permissions, SQLite,  } from 'expo';

import LogoTitle from './LogoTitle';

const db = SQLite.openDatabase('db.db');
export default class ScannerScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle/>,
    headerStyle: {height: 42 ,backgroundColor:'#DCDDDD'} //頂端列高度
  };
  constructor(props){
    super(props);
    this.state={
      scannedBarcodeData: 'none',
      numBarcodesScanned: 0,
      hasCameraPermission: null,
      text: null
    };

  }
  componentDidMount() {
    this._requestCameraPermission();
    
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
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    //掃描後返回上一頁面
    // Alert.alert(
    //   'Scan successful!',
    //   JSON.stringify(data)
    // );
    this.add(JSON.stringify(data));
    
    // Alert.alert(
    //   'Scan successful!',
    //   JSON.stringify(data),
    //   [
    //     {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: '確定', onPress: () => console.log('OK Pressed')},
    //   ],
    //   { cancelable: false }
    // )
    // onPress={() => this.props.navigation.navigate('Scanner')}
    this.props.navigation.navigate('Home');// 加入試試看
    this.update;
    // goBack();
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});