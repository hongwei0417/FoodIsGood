import React, { Component } from 'react';
import { Text, View,ScrollView,StyleSheet, Image, FlatList, TouchableHighlight, Alert, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class AboutScreen extends Component {
  static navigationOptions = {
    title: 'About',
    headerStyle: {
      backgroundColor: '#c0601e'
    },
    headerTintColor: '#323232'
  }
  render() {
      const titleFontSize = 40;
      const sectionFontSize = 30;
      const w = 220;
      const h = 130;
      return (
        <View style={{ alignItems: 'center', backgroundColor: '#323232' }}>
          <Text
            style={{
               fontSize: titleFontSize,
               textAlign: 'center',fontWeight: 'bold',color:'#c0601e', fontStyle:'italic'
             }}
          >
             Food is Good
          </Text>
          <ScrollView>
            <View style={{ alignItems: 'center', backgroundColor: '#323232' }}>
              <Text style={{ fontSize: sectionFontSize,color:'white',fontWeight: 'bold' }}>{'\n'}樂尼尼</Text>
              <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXpgF_DIdM2liAOMoG8PYN5EP0NpgjCHT37wQ_nfKM2zOTIaV' }}
                  style={{ width: w, height: h }}
              />
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center',color:'white',fontWeight: 'bold' }}>{'\n'}九湯屋</Text>
              <Image
                  source={{ uri: 'https://photo.518.com.tw/photo/2/903/2764137/14215816031532001709.jpg' }}
                  style={{ width: w, height: h }}
              />
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center' ,color:'white',fontWeight: 'bold'}}>{'\n'}清一色牛肉麵</Text>
              <Image
                  source={{ uri: 'http://yesone.com.tw/ally/album/O2014011446937_logo/a_img/20140114_0c799.jpg' }}
                  style={{ width: w, height: h }}
              />
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center',color:'white',fontWeight: 'bold' }}>{'\n'}NU pasta</Text>
              <Image
                  source={{ uri: 'http://yesone.com.tw/ally/album/O2013100114171/a_img/20131001_aa475.jpg' }}
                  style={{ width: w, height: h }}
              />
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center',color:'white',fontWeight: 'bold' }}>{'\n'}金正好吃</Text>
              <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5T_rmZrmvzLh7qroKonfJKeoDePYmPkOWApmW6sGAH_6mVku' }}
                  style={{ width: w, height: h }}
              />
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center',color:'white',fontWeight: 'bold' }}>{'\n'}蛋炒飯專賣店</Text>
              <Image
                  source={{ uri: 'https://pic.pimg.tw/sunshinetoday168/1466826032-1905717614_n.jpg?v=1466826090' }}
                  style={{ width: w, height: h }}
              />
            </View>
          </ScrollView>
        </View>
    );
  }
}
