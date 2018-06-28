import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert, Image, FlatList, AsyncStorage, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';


class LikeList extends Component {
  render() {
    return(
      <View>
        <Image source={{uri: this.props.uri}} style={{height: 200}}/>
      </View>
    );
  }
}

export default class LikeScreen extends Component {
  static navigationOptions = {
    title: 'Like',
    header: null,
    headerStyle: {
      backgroundColor: '#c0601e'
    },
    headerTintColor: '#323232'
  }

  async display() {

    for(let i = 0; i <= 6; i++)
    {
      await AsyncStorage.getItem('@Like' + i).then(
        (id) => {
          if(id != null)
          {
            likelist.push(food[i]);
          }
        }
      );
    }
    this.forceUpdate();
  }

  reset = () => {

    AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
    Alert.alert('已刪除所有最愛');
    likelist = [];
    this.forceUpdate();
    // this.props.navigation.goBack();

  }


  constructor() {
    super();
    this.state = {
    };
    this.display();
  }
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#323232'}}>
         <View style={{flex: 1}}>
          <FlatList
            data={likelist}
            renderItem={ ({item}) => <LikeList name={item.name} uri={item.uri}/> }
          />
         </View>
         <Text>{likelist.length}</Text>
         <Button title='清除' onPress={() => this.reset()} />
      </View>
    );
  }
}

var likelist = [];

const food = [
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MjbhEidEbBa0OwtyCCE4PgrEHyzFvfcsB2jpdRpwvSJmykkRnQ', name: '薯條', id: '0', quant: 0, hasAdd: false},
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5TeghyBBcLFRY0H14xbOLybE_yiGKgZEtYrIzM13Yw562fLjmg', name: '義大利麵', id: '1', quant: 0, hasAdd: false},
    { uri: 'http://3.blog.xuite.net/3/d/b/4/11134712/blog_2142053/txt/35136148/1.jpg', name: '焗烤飯', id: '2', quant: 0, hasAdd: false},
    { uri: 'http://www.taiwandao.tw/wiki/uploads/201209/1347878614hhaJGY6B.jpg', name: '牛肉麵', id: '3', quant: 0, hasAdd: false},
    { uri: 'http://704.tw.tranews.com/Show/images/News/3225959_1.jpg', name: '炒飯', id: '4', quant: 0, hasAdd: false},
    { uri: 'http://i.epochtimes.com/assets/uploads/2017/05/e8ba1f4a0b4a29c366d84228001e5617-600x400.jpg', name: '拉麵', id: '5', quant: 0, hasAdd: false},
    { uri: 'http://img.chinatimes.com/newsphoto/2017-11-01/656/20171101004539.jpg', name: '臭豆腐', id: '6', quant: 0, hasAdd: false}];
