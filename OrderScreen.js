import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableHighlight, Alert, AsyncStorage, AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

class FoodList extends Component {

  async saveLike(n) { //儲存喜愛選項
    await AsyncStorage.setItem('@Like' + n, n);
    await AsyncStorage.getItem('@Like' + n).then( (value) => {
      this.setState({like: value});
      Alert.alert('已加入我的最愛' + value);
    });

  }

  reduce() {
    if(this.state.quantity != 0)
      this.setState({
        quantity: this.state.quantity - 1
      });
  }

  add() {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  addToCart(n) {
    const nav = this.props.navigator;
    const buyList = this.props.buyList;
    if(this.state.quantity != 0)
    {
      food[n].quant = this.state.quantity;
      if(food[n].hasAdd == false)
      {
        buyList.push(food[n]);
        food[n].hasAdd = true;
      }
      nav.push('Cart', {
        buyList: buyList
      });
      // Alert.alert('已加入購入車');
    }
    else
    {
      Alert.alert('請選擇份數！');
    }
    // Alert.alert(list[n]);
  }

  constructor() {
    super();
    this.state = {
      like: null,
      quantity: 0,
    };
  }

  render() {
    const nav = this.props.navigator;
    return(
      <View style={{height: 150, borderWidth: 0, flexDirection: 'row'}}>
        <View style={{flex: 7, borderWidth: 0}}>
          <TouchableHighlight onPress={ () => this.saveLike(this.props.id)} style={{flex: 1, borderWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: this.props.uri}} resizeMode="stretch" style={{flex: 1, alignSelf: 'stretch'}} />
          </TouchableHighlight>
        </View>
        <View style={{flex: 4, borderWidth: 0}}>
          <View style={{flex: 1, borderWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[{color: '#c0601e'}, styles.text]}>{this.props.foodName}</Text>
          </View>
          <View style={{flex: 1, borderWidth: 0, flexDirection: 'row'}}>
            <View style={{flex: 1, borderWidth: 0, alignItems: 'stretch', justifyContent: 'center'}}>
              <TouchableHighlight onPress={ () => this.reduce() } style={{flex: 1, borderWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[{color: 'white'}, styles.text]}>-</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex: 1, borderWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[{color: 'white'}, styles.text]}>{this.state.quantity}</Text>
            </View>
            <View style={{flex: 1, borderWidth: 0, alignItems: 'stretch', justifyContent: 'center'}}>
              <TouchableHighlight onPress={ () => this.add() } style={{flex: 1, borderWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[{color: 'white'}, styles.text]}>＋</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{flex: 1, borderWidth: 0}}>
            <TouchableHighlight onPress={ () => this.addToCart(this.props.id)} style={{flex: 1, borderWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 20}}>加到購物車</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default class OrderScreen extends Component {
  static navigationOptions = {
    title: 'Order',
    headerStyle: {
      backgroundColor: '#c0601e'
    },
    headerTintColor: '#323232'
  }

  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    const nav = this.props.navigation;
    const buyList = nav.getParam('buyList', ['a', 'b', 'c'])
    return(
      <View style={{flex: 1, backgroundColor: '#323232'}}>
        <FlatList
          data={food}
          renderItem = { ({item}) => <FoodList uri={item.uri} foodName={item.name} id={item.id}  navigator={nav}  quanList={this.state.quanList}  buyList={buyList}/> }
        >
        </FlatList>
      </View>
    );
  }
}

const food = [
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MjbhEidEbBa0OwtyCCE4PgrEHyzFvfcsB2jpdRpwvSJmykkRnQ', name: '薯條', id: '0', quant: 0, hasAdd: false},
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5TeghyBBcLFRY0H14xbOLybE_yiGKgZEtYrIzM13Yw562fLjmg', name: '義大利麵', id: '1', quant: 0, hasAdd: false},
    { uri: 'http://3.blog.xuite.net/3/d/b/4/11134712/blog_2142053/txt/35136148/1.jpg', name: '焗烤飯', id: '2', quant: 0, hasAdd: false},
    { uri: 'http://www.taiwandao.tw/wiki/uploads/201209/1347878614hhaJGY6B.jpg', name: '牛肉麵', id: '3', quant: 0, hasAdd: false},
    { uri: 'http://704.tw.tranews.com/Show/images/News/3225959_1.jpg', name: '炒飯', id: '4', quant: 0, hasAdd: false},
    { uri: 'http://i.epochtimes.com/assets/uploads/2017/05/e8ba1f4a0b4a29c366d84228001e5617-600x400.jpg', name: '拉麵', id: '5', quant: 0, hasAdd: false},
    { uri: 'http://img.chinatimes.com/newsphoto/2017-11-01/656/20171101004539.jpg', name: '臭豆腐', id: '6', quant: 0, hasAdd: false}];




const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
