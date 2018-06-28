import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert, Image, FlatList, AsyncStorage} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';
import OrderScreen from './OrderScreen';
import LikeScreen from './LikeScreen';
import CartScreen from './CartScreen';
import AboutScreen from './AboutScreen';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };
  _onPressButton()  {
    Alert.alert('You tapped the button!');
  }
  render() {
    const nav = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#323232'}}>
          <Text style={{fontSize: 45,textAlign: 'center',fontWeight: 'bold',color:'#c0601e', fontStyle:'italic'}} >
           {'\n'}Food is Good
          </Text>
        </View>
        <View style={{flex: 4, backgroundColor: '#c0601e', alignItems: 'stretch'}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
            <View style={{flex: 1, borderWidth: 0}}>
              <TouchableHighlight onPress={() => nav.navigate('Order', {buyList: buyList})} style={{flex: 1, borderWidth: 0}} underlayColor="#A0511E">
                <View style={[{flex: 1, borderWidth: 0}, styles.center]}>
                  <Text style={styles.button_text}>Order</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={{flex: 1, borderWidth: 0}}>
              <TouchableHighlight onPress={() => nav.navigate('Cart', {buyList: buyList})} style={{flex: 1, borderWidth: 0}} underlayColor="#A0511E">
                <View style={[{flex: 1, borderWidth: 0}, styles.center]}>
                  <Text style={[styles.button_text]}>Cart</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
            <View style={{flex: 1, borderWidth: 0}}>
              <TouchableHighlight onPress={() => nav.navigate('Like')} style={{flex: 1, borderWidth: 0}} underlayColor="#A0511E">
                <View style={[{flex: 1, borderWidth: 0}, styles.center]}>
                  <Text style={styles.button_text}>Like</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={{flex: 1, borderWidth: 0}}>
              <TouchableHighlight onPress={() => nav.navigate('About')} style={{flex: 1, borderWidth: 0}} underlayColor="#A0511E">
                <View style={[{flex: 1, borderWidth: 0}, styles.center]}>
                  <Text style={styles.button_text}>About</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#323232'}}></View>
      </View>
    );
  }
}

export default class App extends React.Component{
  render() {
    return <Main/>
  }
}

const buyList = [];


const Main = createStackNavigator({
  Home: {screen: HomeScreen},
  Order: {screen: OrderScreen},
  Cart: {screen: CartScreen},
  Like: {screen: LikeScreen},
  About: {screen: AboutScreen},
},
{
  initialRouteName: 'Home',
  navigationOptions: {
   gesturesEnabled: true,
  }
})

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_text: {
    color: '#323232',
    fontSize: 50,
    fontWeight: 'bold'
  }
});
