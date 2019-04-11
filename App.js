import { createAppContainer, createStackNavigator } from "react-navigation";
import Detail from "./src/components/Detail";
import Home from "./src/components/Home";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: `SCAN BARCODE`,
    }),
  },
  Detail: {
    screen: Detail
  }
});

export default createAppContainer(AppNavigator);
