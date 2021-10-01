import React, { useState } from "react";
import { CheckBox } from 'react-native';
import { Button, StyleSheet, Text, TextInput, View, Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const MyServer = (props) => {
      return (
<NavigationContainer>
  <View style={styles.container}>
    <Text style={styles.header}>
       Find your new best friend!
    </Text>
<Text style={{fontSize:12, color:'darkblue', fontFamily: 'papyrus'}}>
    What would you name this dachshund puppy?
     </Text>
<View style={styles.centered}>
    <TextInput
          style={styles.textinput}
          placeholder="Please Name Me!!!!!"
      />
    <Button color='lightblue' title='Click Here To Adopt!'/>
      </View>    
    <View style={{flex:1}}>
              <Button style={{fontSize:5}} title="Click here to keep searching!" color='pink'/>
          </View>
    </View>
</NavigationContainer>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#CCCCFF',
      alignItems: 'center',
      justifyContent: 'center',
      border: "thick solid purple",
      margin:"20px",
      padding:"60px",
    },
    textinput:{
      margin:20,
      fontSize:16,
      fontFamily: "Lucida Console",
      alignText: 'center',
    },
    centered:{
     flex:15,
     flexWrap: 'wrap',
     alignItems: 'stretch',
     justifyContent: 'flex-start',
     borderWidth: '5pt',
     borderColor: 'purple',
  },
    header: {
      fontSize:30,
      color:'#666699',
      fontFamily: "Lucida Console",
      alignText: 'center',
    },
  });
export default MyServer;