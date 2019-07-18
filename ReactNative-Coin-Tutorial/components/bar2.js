import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class TopBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row',
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default TopBar;
