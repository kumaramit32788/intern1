//import liraries
import React ,{useState} from 'react';
import {StyleSheet,View, Modal, StatusBar,
     TextInput,Text,Keyboard, TouchableWithoutFeedback, Button } 
from 'react-native';


// create a component
const InputModal = ({ visible,onClose ,onSubmit}) => {
    const [title ,setTitle]= useState('');
    
    const handleMethodClose =()=>{
            Keyboard.dismiss();
    };
    const handleOnChangeText = (text,valueFor)=>{

        if(valueFor === 'title')setTitle(text);
        console.log(title);
    }
    const submitHandler =()=>{
        if(!title.trim())return onClose();
        onSubmit(title);
        setTitle('')
        onClose()
    }
    return (
        <>
         <StatusBar hidden/>
            <Modal visible={visible} animationType='fade'>
                <View style={styles.container}>
                <TextInput 
                value={title}
                 onChangeText={(text)=>handleOnChangeText(text,"title")} 
                 placeholder='Title'
                  styles={styles.input}/>
                <Button title='submit' onPress={submitHandler}/>
                </View>
                <TouchableWithoutFeedback onPress={handleMethodClose}>
               <View style={[styles.modalBg,StyleSheet.absoluteFill]}/>
           </TouchableWithoutFeedback>
            </Modal>
        
            
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       paddingHorizontal:10,
       paddingTop:"50%"
    
    },
   input:{
        border:2,
        fontFamily:'Cochin'
   },
    modalBg:{
        flex:1,
        zIndex:-1
    }
});


export default InputModal;
