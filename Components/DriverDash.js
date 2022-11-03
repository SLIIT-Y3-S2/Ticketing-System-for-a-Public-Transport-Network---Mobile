import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const DriverDash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/bus-driver-concept-illustration_114360-6610.jpg?w=360",
        }}
        style={{ width: 250, height: 250, marginTop: 5 }}
      />

      <View>
        <Text style={styles.topic}>Welcome Driver</Text>
      </View>

      <View>
        <Text style={styles.subtopic}>Select Option</Text>
      </View>

      <View style={styles.btn}>
        <Button
          color={"#00008b"}
          padding={10}
          title="Scan QR"
          onPress={() => navigation.navigate("DriverScan")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  topic: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtopic: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100,
  },
  btn: {
    height: 150,
    width: 120,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      borderRadius: 8,
  },
});

export default DriverDash;
