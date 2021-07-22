import React, { useState, useEffect }  from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something Went Wrong')

            setTimeout(() => {
               setErrorMessage('') 
            }, 5000);
        }
    }
    //call the seaarchAPI when component render
    useEffect(() => {
        searchApi('pasta')
    }, [])
    
    return ( 
        <>
            <SearchBar 
                term={term} 
                setTerm={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>We have found {results.length} results</Text>
            {errorMessage ? <View style={styles.errorContainer}><Text style={styles.errorText}>{errorMessage}</Text></View> : null}
        </>
     );
}
const styles = StyleSheet.create({
    errorContainer: {
        backgroundColor: '#E74C3C',
        marginHorizontal: '15%',
        alignItems: 'center',
        borderRadius: 3,
        padding: 5,
        borderLeftColor: '#943126',
        borderLeftWidth: 10
    },
    errorText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF'
    }
})
export default SearchScreen;