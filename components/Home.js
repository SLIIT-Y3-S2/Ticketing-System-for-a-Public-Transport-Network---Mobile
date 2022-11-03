import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>

        <Image 
          source={{uri:'https://img.freepik.com/free-vector/bus-driver-concept-illustration_114360-6610.jpg?w=360'}}
          style={{width:250,height:250,marginTop:-100}} />

        <View>
          <Button
            color={'#00008b'}
            title="Scan QR"
            onPress={() =>
              navigation.navigate('DriverDash')
            }
            style={styles.btn}
          />


          {/* <Button 
            title='Get Started'
            style={styles.btn}
            color="#0d316b"
          />
          <Text>Already Registered ?</Text>
          <Button title='Login' color="#0d316b" /> */}
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
    
  });

export default Home
