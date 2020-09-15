import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


const SearchBar = function() {
    return (
    <View style={styles.backgroundStyle}>
        <AntDesign name="search1" size={18} />
        <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    }, 
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    }
})

export default SearchBar