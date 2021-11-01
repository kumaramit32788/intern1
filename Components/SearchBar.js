//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const SearchBar = ({value,onChangeText}) => {
    return (
        <View style={styles.container}>
           <TextInput
           onChangeText={onChangeText}
           value={value} 
           styles={styles.searchbar} 
           placeholder='Search here...'/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
   
    },
    searchbar:{
        borderWidth:0.5,
        height:40,
        borderRadius:40,
        fontSize:20,
        borderWidth:5,
        paddingLeft:20,
        fontFamily:'Cochin'


    }
});

//make this component available to the app
export default SearchBar;
