import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const RestaurantsDetail = function({ result }) {
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url}} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stjärnor, {result.review_count} Recensioner </Text>
    </View>
    }

const styles = StyleSheet .create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
})

export default RestaurantsDetail