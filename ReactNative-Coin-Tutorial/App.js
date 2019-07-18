import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinView from './Screens/CoinView'
import TopBar from './components/TopBar';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      refreshDate:'-',
    }
  }

  _setRefreshDate = (date) =>{
    console.log('Updated: '+date);
    this.setState({
      refreshDate: date,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <TopBar title="Show Me The Coin" refreshDate={this.state.refreshDate}></TopBar>
        <CoinView 
        refreshDate={this._setRefreshDate}
        style={styles.coinView}></CoinView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar:{
    backgroundColor: 'hotpink',
    height: Constants.statusBarHeight
  },
  container:{
    flex: 1,
  },
  coinView:{
    width: '100%',
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'white',
  }
});