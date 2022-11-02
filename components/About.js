import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>About us</Text>

        <Button
          color={'#00008b'}
          title="Back to home"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00bfff',
      alignItems: 'center',
      justifyContent: 'center',
    },

});

export default About