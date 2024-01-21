import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
  
    const handleAddTask = () => {
      const trimmedTitle = title.trim();
      if (trimmedTitle) {
        onAddTask(trimmedTitle);
        setTitle(''); 
      }
    };
  

return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task title..."
        value={title}
        onChangeText={setTitle} // Update title state with the text input
      />
      <Button
        title="Add Task"
        onPress={handleAddTask} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});
  
  export default AddTask;