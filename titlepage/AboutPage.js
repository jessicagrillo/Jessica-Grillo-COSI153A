import React from 'react';
import { RefreshControl, StyleSheet, Text, View, SafeAreaView, ScrollView, Button, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdoptPage from './AdoptPage';  

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const AboutPage = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

//export default function AboutPage () {
  return (
  <SafeAreaView style={styles.container}>
   <ScrollView style={styles.scrollView}
     contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
    <View style={styles.container}>
      <View style={{flex:2, alignItems:'center',backgroundColor:'#CC6666',}}>
          <Text style={styles.header}>
              All About Adopt-a-Doxie!
          </Text>
      </View>
      <View style={{flex:2, alignItems:'center',backgroundColor:'#CC6666',}}>
        <Image
             style={{width:400, height: 400, resizeMode: 'contain'}}
             source={{uri:'https://www.dachworld.com/wp-content/uploads/2021/07/Dachshund-Colors-and-Patterns.png'}}/>
        </View>
      <View style={{flex:8}}>
        <View  style={styles.vertical}>
          <View style={styles.centered}>
              <Text style={{fontSize: 19, fontFamily: 'verana', color: '#CC6666', alignItems: 'center'}}>
                  We are a not-for-profit organization who
              </Text>
              <Text style={{fontSize: 19, fontFamily: 'verana', color: '#CC6666', alignItems: 'center'}}>
                 dedicates our time finding displaced
              </Text>
              <Text style={{fontSize: 19, fontFamily: 'verana', color: '#CC6666', alignItems: 'center'}}>
                 dachshunds a new, safe, loving home.
              </Text>
              <Text style={{fontSize: 19, fontFamily: 'verana', color: '#CC6666', alignItems: 'center'}}>
                 We have a passion for helping not only
              </Text>
              <Text style={{fontSize: 19, fontFamily: 'verana', color: '#CC6666', alignItems: 'center'}}>
                 dogs, but YOU! Adopting through
              </Text>
              <Text style={{fontSize: 19, fontFamily: 'verana', color: '#CC6666', alignItems: 'center'}}>
                Adopt-a-Doxie helps us help you grow your
              </Text>
              <Text style={{fontSize: 19, fontFamily: 'verana', color: '#CC6666', alignItems: 'center'}}>
                family.
              </Text>
          </View>
        </View>
        <View  style={styles.horizontal}>
          <View style={styles.upperLeft}>
              <Text style={{fontSize: 15, fontFamily: 'verana', color: '#FFFFCC', backgroundColor: '#CC6666'}}>
                 This app is designed for you to view a dachshund who needs a home, read the dachshund's story, and name the dachshund (naming the dog will help you make a connection with it and see if the feeling you have tells you to adopt it!). If you want to keep searching for the perfect match, you can click the button to see the next doxie who needs a home.
              </Text>
          </View>
        </View>
      </View>
         <View style={styles.formBox}>
            <Text style={{fontSize:32, fontFamily: 'verana'}}>Register Here! </Text>
            <TextInput style={styles.input} placeholder="Full Name"/>
            <TextInput style={styles.input} placeholder="Age"/>
            <TextInput style={styles.input} placeholder="Email"/>
            <Button title="Submit" color="darkblue"
           />
          </View>
       <View style={{flex:.5, backgroundColor:'white', alignItems: 'right'}}>
          <Text style={styles.footer}>
              *You must be screened and have proper documentation submitted before your adoption request can be reviewed*
          </Text>
      </View>
    </View>
    <Text>Pull down to see RefreshControl indicator</Text>
   </ScrollView>
 </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  header: {
    flex:1,
    alignItems:'center',
    fontSize:30,
    fontFamily: 'comic sans ms',
    padding:25,
    color:"#FFFFCC",
  },
  vertical: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'#FFFFCC',
  },
  horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'#CC6666',
  },
  upperLeft:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: '20pt',
    borderColor: '#FFFFCC',
    flexDirection:'row',
  },
  centered:{
    flex:2,
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderWidth: '20pt',
    borderColor: '#CC6666',
    padding:'4px',
    margin:'3px',
  },
  input:{
    color: 'CC6666',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 1,
  },
  formBox:{
    flex:.5,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'#fffff5',
  },
  footer:{
    flex:.1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'white',
    color: 'red'
  },
});
export default AboutPage