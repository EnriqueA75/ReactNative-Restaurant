import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
  Search: SearchScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: "Business Search",
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#F4ECF7'
    }
  }
})
export default createAppContainer(navigator)