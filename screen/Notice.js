import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import { Button  } from 'react-native-elements';
import { SQLite,  } from 'expo';
const { height, width } = Dimensions.get('window');
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

export default class Notice extends React.Component {
  // 畫面最上面那條頂端列，只放入圖片，其餘在使用這個class時修改navigationOptions
  state={
    text: null,
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30 }}>2018 集點活動</Text>
        <Image source={require('../assets/banner-72.png')} style={{ width: Dimensions.get('window').width, height: 130,resizeMode: Image.resizeMode.stretch }} />
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
                    tx.executeSql('update items set done = 1 where id = ?;', [id]);
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
                    tx.executeSql('delete from items where id = ?;', [id]);
                  },
                  null,
                  this.update
                )}
            />
            
          </View>
        </ScrollView> 
      </View>
    );
  }
}