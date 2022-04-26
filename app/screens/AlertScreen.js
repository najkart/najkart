import react from "react";
import {
  Provider as PaperProvider,
  List,
  Text,
  Title,
  Searchbar,
  Appbar,
} from "react-native-paper";
import { SafeAreaView, VirtualizedList, View } from "react-native";
function AlertScreen() {
  const DATA = [];

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Alerte ${index + 1}`,
  });

  const getItemCount = (data) => 50;

  const Item = ({ title }) => (
    <List.Item
      title={title}
      description="Description alerte"
      right={(props) => <List.Icon {...props} icon="autorenew" />}
    />
  );
  return (
    <PaperProvider>
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content title="Mes alertes" subtitle="Subtitle" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <Searchbar placeholder="Search" />
        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    </PaperProvider>
    //     <PaperProvider >
    //     <List.Item
    //   title="First Item"
    //   description="Item description"

    // />
    //   <List.Item
    //   title="First Item"
    //   description="Item description"

    // />
    //   <List.Item
    //   title="First Item"
    //   description="Item description"

    // />

    //   </PaperProvider>
  );
}
export default AlertScreen;
