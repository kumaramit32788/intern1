//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage, FlatList } from 'react-native';
import Note from './Components/note';
import SearchBar from './Components/SearchBar';
import InputModal from './Screen/InputModal';
import List from './Screen/List';




// create a component
const App = () => {
  const [modalVissible, setModalVissible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchQuery ,setSearchQuery]= useState('');

  const findNotes = async () => {
    const result = await AsyncStorage.getItem('notes');
    if (result !== null) setNotes(JSON.parse(result));
  }

  useEffect(() => {
    findNotes();
  }, [])

  const handleOnSubmit = async (title) => {
    const note = { id: Date.now(), title, time: Date.now() }
    const updatedItem = [...notes, note];
    setNotes(updatedItem)
    await AsyncStorage.setItem('notes', JSON.stringify(updatedItem))
  }

  const handleOnSearchInput= (text) =>{
    setSearchQuery(text);
    if(!text.trim()){
      setSearchQuery('');
      
    }
   const filteredNotes = notes.filter(note =>{
      if(note.title.toLowerCase().includes(text.toLowerCase()))
        return note;
    })
    if(filteredNotes.length){
      setNotes([...filteredNotes])
    }
  }
  return (
    <>
      <View style={styles.new}>
        <View style={styles.search}>
          <SearchBar 
          value={searchQuery}
          onChangeText={handleOnSearchInput}/>
        </View>
        <View style={styles.button}>
          <Button title='adds' onPress={() => setModalVissible(true)} />
        </View>
      </View>
      <FlatList
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Note item={item} />}
      />

      <InputModal
        visible={modalVissible}
        onClose={() => setModalVissible(false)}
        onSubmit={handleOnSubmit}
      />



    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  
  button: {
    justifyContent:'flex-start',
    alignItems:'stretch',
    padding: 10,
    
  },
  search:{
    justifyContent:'space-between',
    alignItems:'flex-start',
    padding: 10,
  },new:{
    
  }
});

//make this component available to the app
export default App;
