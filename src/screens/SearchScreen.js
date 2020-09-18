import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantList from '../components/RestaurantsList'

const SearchScreen = function() {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useRestaurants()

const filterResultsByPrice = function (price) {
    return results.filter(result => {
        return result.price === price
    })
}
  
    return (
    <>
        <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)} 
         />
        {errorMessage ? <Text>{errorMessage}</Text> :null}
        <ScrollView>
            <RestaurantList results={filterResultsByPrice('$')} 
            title="Kostnadseffektiv"
            />
            <RestaurantList results={filterResultsByPrice('$$')} 
            title="Lite dyrare"
            />
            <RestaurantList results={filterResultsByPrice('$')} 
            title="Stor slösare"
            />
        </ScrollView>
    </ >
    )
}

const styles = StyleSheet.create({})

export default SearchScreen