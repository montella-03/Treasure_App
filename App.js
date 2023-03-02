
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./Screens/Home";
import Savings from "./Screens/Savings";
import Transactions from "./Screens/Transactions";

  const stack = createStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold:require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight:require("./assets/fonts/Inter-Light.ttf")
  });
  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <stack.Screen name="Home"component={Home} />
        <stack.Screen name="Savings" component={Savings} />
        <stack.Screen name="Transactions" component={Transactions} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


