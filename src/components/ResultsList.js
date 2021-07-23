import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {

    if(!results.length){
        return null
    }

    return ( 
        <View style={styles.containerStl}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity                         
                            onPress={() => navigation.navigate('Results', { id: item.id })}
                        >
                            <ResultsDetail item={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
     );
}
 const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containerStl: {
        marginBottom: 10
    }
})
export default ResultsList;