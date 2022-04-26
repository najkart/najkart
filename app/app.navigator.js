import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AlertScreenTest from "./screens/AlertScreenTest";
import AlertDetailsScreen from "./screens/AlertDetailsScreen";
import { Appbar } from "react-native-paper";

const {Navigator, Screen}=createNativeStackNavigator();
const Appnavigator=()=>(
    
    <NavigationContainer>
        <Navigator screenOptions={{ header: CustomNavigationBar,}}      >
             <Screen name="AlertsList" component={AlertScreenTest} options={{ title: 'Mes alertes' }} />
             <Screen name="AlertDetails" component={AlertDetailsScreen}  options={{ title: 'Detail alerte' }} />
        </Navigator>
       
    </NavigationContainer>
)
  
export default Appnavigator;

function CustomNavigationBar({ navigation, back }) {
    // const [visible, setVisible] = react.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
  
    return (
      <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="Forex Metrics" />
      </Appbar.Header>
    );
  }