import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, SafeAreaView, ScrollView, Image, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = (props) => {
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
  const [info, setInfo] = useState({name:''});
  const [name, setName] = useState('');
  useEffect(() => {getData()},[])
  const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@puppy_name')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setInfo(data)
            setName(data.name)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
          }
        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
        }
  }
  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@puppy_name', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
  }
  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
        }
  }
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.container2}>
              <Text style={styles.header2}>
                 Find your new best friend!
              </Text>
           <View style={{flex:5, flexDirection:'row'}}>
          <Image style={{flex: 1, width: 400, height: 400, resizeMode: 'contain'}} source={{uri:'https://dogfoodsmart.com/wp-content/uploads/2021/06/How_Much_To_Feed_A_Dachshund_Puppy.jpg'}} />
            </View>
              <TextInput
                    style={styles.textinputNAME}
                    placeholder="Name me here!"
                    onChangeText={text => {
                      setName(text) }}
                    value={name} />
              <Button
                    color='#8A655D' title='Save this doxie name!'
                    onPress = {() => {
                         console.log("Saving...");
                         const theInfo = {name:name}
                         console.log(`theInfo=${theInfo}`)
                         setInfo(theInfo)
                         console.log('data='+JSON.stringify(theInfo))
                         storeData(theInfo) }} />
              <Button
                  color='#713325' title='Forget this doxie name!'
                  onPress = {() => {
                        console.log('Removing...');
                        clearAll() }} />
              <Button
                  color='#4B160A' title='Retrieve sampled doxie names!'
                  onPress = {() => {
                        console.log('Retrieving...');
                        getData() }} />
              <Text>
               Name = {name}{JSON.stringify(info)}
              </Text>
              </View>
        </ScrollView>
   </SafeAreaView>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#43C6DB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinputNAME:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    container2: {
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
    header2: {
      fontSize:30,
      color:'#666699',
      fontFamily: "Lucida Console",
      alignText: 'center',
    },
  });
export default Profile;