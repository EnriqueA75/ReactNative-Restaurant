import React, { useState }  from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        //price $ || $$ || $$
        return results.filter(result => {
            return result.price === price
        })
    }
    return ( 
        <>
            <SearchBar 
                term={term} 
                setTerm={setTerm}
                onTermSubmit={() => searchApi(term)}
            />

            <ResultsList title={"Cost Effective"} results={filterResultsByPrice('$')}/>
            <ResultsList title={"Bit Pricier"} results={filterResultsByPrice('$$')}/>
            <ResultsList title={"Big Spender"} results={filterResultsByPrice('$$$')}/>

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