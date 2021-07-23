import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null)

    const id = navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null
    }
    console.log(result)
    return ( 
        <View>
            <Text style={styles.titleStl}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={ ({ item })  => {
                    return (
                        <Image source={{uri: item}} style={[{height: 200, width: '100%'}, styles.imageSt]}/>
                    )
                }
            }            
            />
            <View style={styles.reviewCointainer}>
                <Text style={styles.reviewsStl}>{result.rating} Starts - {result.review_count} Reviews</Text>
            </View>
            <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-end', marginRight: '5%'}}>Phone Number: {result.phone}</Text>
            </View>
    ); 
}
const styles = StyleSheet.create({
    imageSt: {
        marginBottom: 8,
    },
    titleStl: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10,
        alignSelf: 'center',
        color: '#273746'
    },
    reviewsStl: {
        fontSize: 16,
        alignSelf: 'flex-end',
        marginRight: '5%'
    },
    reviewCointainer: {
        backgroundColor: '#FCF3CF',
        alignSelf: 'flex-end',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#F1C40F'
    }
})
export default ResultsShowScreen;