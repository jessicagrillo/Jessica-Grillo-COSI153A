import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView, ScrollView, TextInput, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutPage from './AboutPage';
import AdoptPage from './AdoptPage';
import CalcPage from './CalcPage';
import ReasonPage from './ReasonPage';
import ScreenDemo from './ScreenDemo';
import Context from './Context';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TitlePage"
          component={App}
        />
        <Stack.Screen
          name="AdoptPage"
          component={AdoptPage}
        />
        <Stack.Screen
          name="CalcPage"
          component={CalcPage}
        />
        <Stack.Screen
          name="ReasonPage"
          component={ReasonPage}
        />
        <Stack.Screen
          name="ScreenDemo"
          component={ScreenDemo}
        />
         <Stack.Screen
          name="Context"
          component={Context}
        />
        <Stack.Screen name="AboutPage" component={AboutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = ({ navigation }) => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "BEFORE YOU ADOPT",
      "*You must be screened and have proper documentation submitted before your adoption request can be reviewed*",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
  <SafeAreaView style={styles.container}>
   <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
        <View style={{flex:1,backgroundColor:'#FFFFCC', alignItems:'center'}}>
              <Text style={{fontSize:60, color: '#CC9966',  fontFamily: "Comic Sans MS"}}>
                  Adopt-a-Doxie!
              </Text>
        </View>
              <View style={{flexDirection:'row', flex:.6, justifyContent:'space-around', backgroundColor:'#FFFFCC'}}>
                  <Text style={{fontSize:9, width:"10%", color: '#663300',  fontFamily: "verdana", alignText:'center'}}>
                       Where Furry Friends Find Homes,
                  </Text>
                 <Text style={{fontSize:9, width:"10%", color: '#663300',  fontFamily: "verdana", alignText:'center'}}>
                     Where Families Grow,
                  </Text>
                   <Text style={{fontSize:9, width:"10%", color: '#663300',  fontFamily: "verdana", alignText:'center'}}>
                     Where Lives Become Fulfilled,
                  </Text>
                  <Text style={{fontSize:9, width:"15%", color: '#663300',  fontFamily: "verdana", alignText:'center'}}>
                      Where Humanity Does Good,
                  </Text>
                  <Text style={{fontSize:9, width:"10%", color: '#663300',  fontFamily: "verdana", alignText:'center'}}>
                      Where The World Becomes A Home.
                  </Text>
              </View>
        <View style={{flex:5, flexDirection:'row'}}>
          <Image style={{flex: 1, width: 400, height: 400, resizeMode: 'contain'}} source={{uri:'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/07/08142133/Dachshund-litter-of-puppies-sitting-outdoors-1.jpg'}} />
            </View>
          <Button title="Click here to learn why you should adopt a dachshund" color="#C63B68"
           onPress={() =>
           navigation.navigate('ReasonPage', { name: 'ReasonPage' })}/>

          <Button title="Click here to view our most recently adopted doxie!" color="#BF6C95"
           onPress={() =>
           navigation.navigate('ScreenDemo', { name: 'ScreenDemo' })}/>

          <Button title="Click here to read about our story and mission" color="pink"
           onPress={() =>
           navigation.navigate('AboutPage', { name: 'AboutPage' })}/>

           <Button title="Click here to start looking for puppies!" color="lightblue"
           onPress={() =>
           navigation.navigate('AdoptPage', { name: 'AdoptPage' })}/>

           <Button title="Click here to view your total" color="#7E4A64"
           onPress={() =>
           navigation.navigate('CalcPage', { name: 'CalcPage' })}/>

          <Button title="Click here to make donations!" color="#E3CEF6"
           onPress={() =>
           navigation.navigate('Context', { name: 'Context' })}/>

        </View>
        <View style={styles.container}>
          <Button title={"NOTICE!"} color = "#AF1B1B" onPress={createTwoButtonAlert} />
        </View>
      </ScrollView>
   </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'column',
    margin:'20px',
    border:'thick solid pink',
  },
});
export default MyStack;