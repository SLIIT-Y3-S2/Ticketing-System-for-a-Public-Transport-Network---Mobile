import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>

        <Image 
          source={{uri:'https://img.freepik.com/free-vector/bus-driver-concept-illustration_114360-6610.jpg?w=360'}}
          style={{width:250,height:250,marginTop:-50}} />

        <View>
          <Button 
            title='Get Started'
            style={styles.btn}
            color="#0d316b"
          />

          <Text style={styles.topic}>Easy Going</Text>
          <Text style={{paddingHorizontal:20,textAlign:'center'}}>Things Go Better and Nothing is Faster Than  <Text style={{paddingRight:20,fontWeight:'bold'}}>Easy Going</Text> </Text>
          <Text style={{paddingHorizontal:20,textAlign:'center',paddingVertical:10}}>The Best Way of Recharging Your Ticket</Text>
          <Text style={styles.subt}>Already Registered ?</Text>
          <Button title='Login' color="#0d316b" />
        </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topic:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:30,
      padding:20
    },
    subt: {
      textAlign:'center',
      padding:10,
      fontWeight:'bold',
    },
  
  });

export default Home
