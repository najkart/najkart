
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Provider as PaperProvider,
  Appbar
} from 'react-native-paper';
import Appnavigator from './app/app.navigator';

 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  //  <AlertScreenTest/>
  // <AlertDetails />
  // <MoviesScreen/>
  <PaperProvider>
    <Appnavigator/>
  </PaperProvider>
  
  // <PaperProvider>
  //     <NavigationContainer>
  //           <Stack.Navigator
  //           screenOptions={{
  //             header: CustomNavigationBar,
  //           }}
  //           >
  //             <Stack.Screen name="AlertsList" component={AlertScreenTest} options={{ title: 'Mes alertes' }} />
  //             <Stack.Screen name="AlertDetails" component={AlertDetails}  options={{ title: 'Detail alerte' }} />
  //           </Stack.Navigator>
  //         </NavigationContainer> 
  //   </PaperProvider>
 
  );
}

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