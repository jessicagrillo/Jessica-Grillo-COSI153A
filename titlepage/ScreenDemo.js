import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from 'react-native'
import ScreenTemplate from './containers/ScreenTemplate'
import PhotoID from './PhotoID'

const ScreenDemo = () => {
  return (
    <ScreenTemplate
        footer={<Text  style={{fontSize:32, color: 'darkgray', fontFamily: 'times'}}>This pup was adopted on 10/31/2021! </Text>}
    >
        <Text style={{fontSize:32, color: 'darkgray', fontFamily: 'times'}}>Just Adopted!</Text>
        <PhotoID
            name="Lawrence"
            imageurl="https://i.pinimg.com/originals/6e/14/b1/6e14b1e4065b41eaf8ce649e6b3bb246.jpg"
        />
    </ScreenTemplate>
  )
}

const styles=StyleSheet.create({
  centeredElt:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  banner:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})

export default ScreenDemo