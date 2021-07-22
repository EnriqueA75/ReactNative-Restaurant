import React, { useState }  from 'react';
import { Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

    const [term, setTerm] = useState('')

    return ( 
        <>
            <SearchBar 
                term={term} 
                setTerm={setTerm}
                onTermSubmit={() => console.log('term submitted')}
            />
            <Text>{term}</Text>
        </>
     );
}
const styles = StyleSheet.create({
    
})
export default SearchScreen;