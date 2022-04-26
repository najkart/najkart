import react from "react";

import {
  Provider as PaperProvider,
  List,
  Text,
  Title,
  Searchbar,
  Appbar,
  Button,
  Switch,
  Subheading,
  IconButton,
  Headline,
  Paragraph,
  Card
} from "react-native-paper";
 
import { SafeAreaView, VirtualizedList, View } from "react-native";
import { StyleSheet } from "react-native";

function AlertDetailsScreen({ navigation }) {

  const alertData =   {
        "alert_name": "test name",
        "expire": false,
        "alerting_device": "e-mail",
        "is_active": true,
        "description": "ceci est une alerte",
        "currency_pair": "EUR_USD",
        "protection_level": "private",
        "triggers": []
    };
 

  return (
    <Card>
      <Card.Content>
        <Title> Detail Alerte </Title>
        <Paragraph></Paragraph>
      </Card.Content>
    </Card>

    // <PaperProvider>
    //   <SafeAreaView>
    //     <Appbar.Header>
    //       <Appbar.BackAction />
    //       <Appbar.Content title="Detail alerte" subtitle="" />
    //       <Appbar.Action icon="dots-vertical" />
    //     </Appbar.Header> 
    //     <Headline>details screen</Headline>
    //   </SafeAreaView>
    // </PaperProvider>
  );
}
export default AlertDetailsScreen;
