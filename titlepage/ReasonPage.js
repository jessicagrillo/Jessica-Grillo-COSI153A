import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
  {
    title: "What are dachshunds like?",
    data: ["Playful", "Lively", "Loyal"]
  },
  {
    title: "What do dachshunds need?",
    data: ["Love", "Attention", "Rubs and Cuddles"]
  },
  {
    title: "Why should I get a dachshund?",
    data: ["Because they are loyal", "Because they love adventure (and can easily be transported)", "Because they are simply THE BEST!"]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#4B5FC8",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    color: "#fff",
    backgroundColor: "#C63B68"
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "ahoma",
  }
});
export default App;