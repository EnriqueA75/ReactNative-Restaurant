import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({item}) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.nameStl}>{item.name}</Text>
            <Image source={{uri: item.image_url}} style={styles.imageStl}/>
            <Text style={styles.reviewsStl}>{item.rating} Starts - {item.review_count} Reviews</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStl: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStl: {
        fontWeight: 'bold',
    },
    reviewsStl: {
        
    }
})

export default ResultsDetail;