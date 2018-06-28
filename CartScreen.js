import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableHighlight, Alert, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';


class BuyList extends Component {
  render() {
    return(
      <View style={{height: 150, borderWidth: 0, flexDirection: 'row'}}>
        <View style={{flex: 7, borderWidth: 0}}>
          <TouchableHighlight onPress={ () => Alert.alert(this.props.quant)} style={{flex: 1, borderWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: this.props.uri}} resizeMode="stretch" style={{flex: 1, alignSelf: 'stretch'}} />
          </TouchableHighlight>
        </View>
        <View style={{flex: 4, borderWidth: 0}}>
          <View style={{flex: 1, borderWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[{color: '#c0601e'}, styles.text]}>{this.props.foodName}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[{color: 'yellow'}, styles.text]}>{this.props.quant}份</Text>
          </View>
          <View style={{flex: 1, borderWidth: 0}}>
            <TouchableHighlight onPress={ () => Alert.alert('購買成功！')} style={{flex: 1, borderWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[{color: 'white'}, styles.text]}>購買</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default class CartScreen extends Component {
  static navigationOptions = {
    title: 'Cart',
    headerStyle: {
      backgroundColor: '#c0601e'
    },
    headerTintColor: '#323232'
  }
  render() {
    const nav = this.props.navigation;
    const buyList = nav.getParam('buyList', ['a', 'b', 'c'])
    return(
      <View style={{flex: 1, backgroundColor: '#323232'}}>
        <FlatList
          data={buyList}
          renderItem={ ({item}) => <BuyList uri={item.uri} id={item.id} foodName={item.name} quant={item.quant}/> }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
