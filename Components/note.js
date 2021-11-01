//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Card} from 'react-native-shadow-cards';

// create a component
const Note = ({item}) => {
    const {title} = item;
    return (

        <View style={styles.container}>
      <Card style={{padding: 10, margin: 10}}>
        <Text>{title}</Text>
      </Card>

    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Note;
