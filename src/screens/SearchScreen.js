import React, { useState }  from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {

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
            <ScrollView>
                <ResultsList title={"Cost Effective"} results={filterResultsByPrice('$')} navigation={navigation}/>
                <ResultsList title={"Bit Pricier"} results={filterResultsByPrice('$$')} navigation={navigation} />
                <ResultsList title={"Big Spender"} results={filterResultsByPrice('$$$')} navigation={navigation} />
            </ScrollView>
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