import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity 
} from 'react-native'

import { withNavigation } from 'react-navigation'
import RestaurantsDetail from './RestaurantsDetail'

const RestaurantList = ({ title, results, navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => {
          return (
            <TouchableOpacity 
                onPress={() => 
                navigation.navigate('RestaurantsShow', { id: item.id })
            }
            >
                <RestaurantsDetail result={item} />
          </TouchableOpacity> 
          )
          }}
        />
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }, 
    container: {
         marginBottom: 10
    }
})



export default withNavigation(RestaurantList)