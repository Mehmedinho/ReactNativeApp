import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const RestaurantsShowScreen = function({ navigation }) {
    const [restaurant, setRestaurant, title] = useState(null)
    const id = navigation.getParam('id')

    const getRestaurants = async function(id) {
       const response =  await yelp.get(`/${id}`)
       response.data
       setRestaurant(response.data)
    }
    useEffect(() => {
        getRestaurants(id)
    }, [])

    if (!restaurant) {
        return null
    }
     
    return (
    <View> 
         <Text style={styles.titleStyle}>{title}{restaurant.name}</Text>
         <FlatList style={styles.container}
            data={restaurant.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />
            }}
         />
    </View>
    )
}

const styles =  StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        paddingHorizontal: 180,
    },
    container: {
        marginBottom: 40
    },
    titleStyle: {
       marginLeft: 150,
    }
})

export default RestaurantsShowScreen