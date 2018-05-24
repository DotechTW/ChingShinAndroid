import React, { Component } from 'react';
import { BarCodeScanner, Permissions } from 'expo';

class QRcodeScanner extends Component {
  // static navigationOptions = {
  //   title: '掃描',
  // };
  state = {
    hasCameraPermission: null,
  };
 


  // 这里首先判定是否拥有相机权限，有我们才能正大光明的调用
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  // 扫描成功自动调用，这里先返回上一页，再调用回调函数，显示扫描内容
  handleBarCodeRead = ({ data }) => {
    const { goBack, state } = this.props.navigation;
    goBack();
    state.params.onRead(data);
  };

  render() {
    const { hasCameraPermission } = this.state;

    // 若无权限，提示用户
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeRead={this.handleBarCodeRead}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}

export default QRcodeScanner;