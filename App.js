import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import RestaurantsShowScreen from './src/screens/RestaurantsShowScreen'
 

const navigator = createStackNavigator(
  
  {

  Search: SearchScreen,
  RestaurantsShow: RestaurantsShowScreen
  }, 
  {

  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Matsökning'
   }

})

export default createAppContainer(navigator)