import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const BScreen = (navigation) => {
  return (
    <View>
      <Text>B</Text>
      <Button title="Go to C" on press={()=> {navigation.navigate("C")}}/>
    </View>
  )
}

export default BScreen

const styles = StyleSheet.create({})