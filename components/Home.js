import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>

        <Image 
          source={{uri:'https://img.freepik.com/free-vector/bus-driver-concept-illustration_114360-6610.jpg?w=360'}}
          style={{width:250,height:250,marginTop:-100}} />

        <View>
          <Button 
            title='Get Started'
            style={styles.btn}
            color="#0d316b"
          />


          {/* <Button
            title="Payment"
            onPress={() =>
              navigation.navigate('Payment')
            }
            style={styles.btn}
           
          />
          <Button
            color={'#f194ff'}
            title="About"
            onPress={() =>
              navigation.navigate('About')
            }
            style={styles.btn}
          />
          <Button
            color={'#00008b'}
            title="Scan QR"
            onPress={() =>
              navigation.navigate('InspectorScan')
            }
            style={styles.btn}
          />
           */}
          <Text>Already Registered ?</Text>
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
    
  });

export default Home