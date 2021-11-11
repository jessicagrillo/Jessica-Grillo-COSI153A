import React, { useState } from "react";
import { Button, StyleSheet, Text, SafeAreaView, ScrollView, TextInput, View } from "react-native";

const FinalCalculator = (props) => {
  const [fee, setFee] = useState("0");
  const [surgery, setSurgery] = useState("0");
  const [vax,setVax] = useState("0")
  const [micro,setMicro] = useState("0")
  const [supplies,setSupplies] = useState("0")
  const [donation,setDonation] = useState("0")
  const [total,setTotal] = useState("0")
  const [debugging,setDebugging] = useState(false)
  let debugView = ""
  if (debugging) {
    debugView =
      <View>
          <Text> Adoption Fee: {fee} </Text>
          <Text> Spay or Neuter: {surgery} </Text>
          <Text> Initial Vaccinations: {vax} </Text>
          <Text> Microchipping: {micro} </Text>
          <Text> Home Puppy Supplies: {supplies} </Text>
          <Text> Donation to Adopt-A-Doxie: {donation} </Text>
      </View>
  }
  
  return (
  <SafeAreaView style={styles.container}>
   <ScrollView style={styles.scrollView}>
  <View style={styles.container}>
    <Text style={styles.header}>
       Calculate your fees and extras!  {props.total}
    </Text>
    <TextInput
          style={styles.textinput}
          placeholder="Puppy Adoption Fee"
          onChangeText={text => {setFee(parseFloat(text))}}
      />
       <TextInput
          style={styles.textinput}
          placeholder="Spay/Neuter Fee"
          onChangeText={text => {setSurgery(parseFloat(text))}}
      />
       <TextInput
          style={styles.textinput}
          placeholder="Initial Vaccines Fee"
          onChangeText={text => {setVax(parseFloat(text))}}
      />
       <TextInput
          style={styles.textinput}
          placeholder="Microchipping Fee"
          onChangeText={text => {setMicro(parseFloat(text))}}
      />
       <TextInput
          style={styles.textinput}
          placeholder="Supplies Fee"
          onChangeText={text => {setSupplies(parseFloat(text))}}
      />
       <TextInput
          style={styles.textinput}
          placeholder="Donation to Adopt-A-Doxie!"
          onChangeText={text => {setDonation(parseFloat(text))}}
      />
    <Button
          color='black' title='Calculate Total Cost'
          onPress = {() =>
               setTotal(parseFloat(fee)+parseFloat(surgery)+parseFloat(vax)+parseFloat(micro)+parseFloat(supplies)+parseFloat(donation))}
      />
    <Text> Amount Due: {total} </Text>

    <Button
          color='#FF3366' title='Continue to Payment'
      />
 
      <Button
          color='#9999CC' title='Click here to visualize the total costs of this doxie!'
      />
      </View>
     </ScrollView>
    </SafeAreaView>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      border: "thick solid black",
      margin:"5px",
      padding:"50px",
    },
    textinput:{
      margin:5,
      fontSize:20,
      color:'#0099CC'
    },
    header: {
      fontSize:40,
      fontFamily: 'times',
      alignContent: 'center',
      alignItems: 'center',
      color:'black'
    },
  });
 
export default FinalCalculator;