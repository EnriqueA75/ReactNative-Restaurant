import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'

const SearchBar = ({term, setTerm, onTermSubmit}) => {

    return ( 
        <View style={styles.backgroundStyle}>
            <EvilIcons name="search" size={45} style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.inputStyle}
                value={term}
                onChangeText={setTerm}        
                onEndEditing={() => onTermSubmit()}
            />
        </View>
     );
}
const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: '4%',
        backgroundColor: '#EAEDED',
        height: 50,
        borderRadius: 10,
        marginHorizontal: '10%',
        flexDirection: 'row',        
    },
    inputStyle: {
        flex: 1
    },
    iconStyle:{
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
export default SearchBar;