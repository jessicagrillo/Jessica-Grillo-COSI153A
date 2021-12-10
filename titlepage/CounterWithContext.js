import React from "react";
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import NamedCounterC from './NamedCounterWithContext';
import {useValue} from './ValueContext';

const CounterWithContext = () => {
  const {currentValue} = useValue();
  const total = currentValue.total
  const count = currentValue.count

  return (
    <View style={{margin:'2%',marginTop:10,backgroundColor:'pink',
            justifyContent:'flex-start',}}>
      <Text style={{fontSize:25, fontFamily: "optima"}}>
        Click a button to make a one-dollar donation to any of the following organizations!
      </Text>
      <Text> Donation Amount = ${(total/100).toFixed(2)} </Text>
      <Text> Number of Donations = {count} </Text>
      <View style={{flexDirection:'row'}}>
        <NamedCounterC label="Adopt-A-Doxie" value={100}/>
        <NamedCounterC label="PETA" value={100}/>
        <NamedCounterC label="ASPCA" value={100}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <NamedCounterC label="Hope For Paws" value={100}/>
        <NamedCounterC label="Best Friends Animal Society" value={100}/>
        <NamedCounterC label="Adopt a Dog" value={100}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <NamedCounterC label="Second Chance Animal Rescue NY" value={100}/>
        <NamedCounterC label="Rescue Right" value={100}/>
        <NamedCounterC label="Dogs for Better Lives" value={100}/>
      </View>
      <Text>Use a flatlist for this ...
        {JSON.stringify(currentValue.log,null,5)}
      </Text>
    </View>
  );
}
export default CounterWithContext;