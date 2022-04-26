import React, { useEffect, useState } from "react";

import { useNavigation } from '@react-navigation/native';
import AlertAPI from '../apis/AlertsApi'
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
} from "react-native-paper";
import { SafeAreaView, VirtualizedList, View } from "react-native";
import { StyleSheet } from "react-native";

function AlertScreenTest({ navigation }) {

  const styles = StyleSheet.create({
    text: {
      height: 40,
      backgroundColor: "white",
      borderRadius: 5,
      padding: 10,
    },
    statusactif: {
      backgroundColor: "lightgreen",
    },
    statusinactif: {
      backgroundColor: "#FF6666",
    },
  });

  const [DATA, setAlerts] = useState([]);

    useEffect(() => {
      getAlertsFromAPI()
    }, [])

    function getAlertsFromAPI() {
      AlertAPI.get('Alerts')
          .then(async function (response) {
            setAlerts(response.data);
          })
          .catch(function (error) {
              console.log(error)
          })
  }
 
  const getItem = (data, index) => ({
    id: data[index].id,
    title: data[index].title,
    description: data[index].description,
    status: data[index].status,
  });

  const getItemCount = (data) => DATA.length;

  const Item = ({ item }) => (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
        flex: 2,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          padding: 10,
          justifyContent: "left",
          alignItems: "left",
          alignSelf: "left",
        }}
      >
        <Subheading>{item.title}</Subheading>
        <Text>{item.description}</Text>
      </View>
      <View
        style={{
          paddingTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Subheading
          style={[
            styles.text,
            item.status == "inactif" ? styles.statusinactif : styles.statusactif,
          ]}
        >
          {" "}
          Status {item.status}{" "}
        </Subheading>
      </View>
      <View style={{ paddingTop: 10, position: "absolute", right: 0 }}>
        <IconButton icon="comment-edit-outline" 
        onPress={() =>
          navigation.navigate('AlertDetails', { AlertId: item.id })
        }
        ></IconButton>
      </View>
    </View>
  );

  return (
    <PaperProvider>
      <SafeAreaView>
      <Title> Mes alertes </Title>
        <Searchbar placeholder="Search" />
        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}
export default AlertScreenTest;
