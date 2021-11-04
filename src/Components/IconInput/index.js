import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const IconInput  = () => {
  return(
    <View style={styles.inputContainer}>
           <Icon 
            style={styles.icon} 
            name="search"
            size={20} 
        />
    <TextInput
        placeholder="Buscar"
        placeholderTextColor="#757575"
    >

    </TextInput>
</View>
  )
}


const styles = StyleSheet.create({
    inputContainer: {
        height: 50,
        width: 343,
        marginTop: 34,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 5,
        backgroundColor: "#FFF",
        alignSelf: 'center',
        color: "#757575",
        flexDirection: 'row'
    },
    icon: {
        padding: 16,
    }
});

export default IconInput;