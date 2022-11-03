import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Text,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";

const AddJourney = () => {
  const [validated, setvalidated] = useState(false);
  const [UserID, setUserID] = useState("");
  const [DriverID, setDriverID] = useState("");
  const [BusNo, setBusNo] = useState("");
  const [Route, setRoute] = useState("");
  const [StartLocation, setStartLocation] = useState("");
  const [EndLocation, setEndLocation] = useState("");
  const [Fare, setFare] = useState("");
  const [date, setDate] = useState("");
  const [Time, setTime] = useState("");

  return (
  <ScrollView style={styles.view}>

    <Text style={styles.topic}>Add a journey</Text>
    <SafeAreaView style={styles.form}>

        <Text style={styles.label}>User Id</Text>
            <TextInput
                style={styles.input}
                value={UserID}
                onChangeText={text => setUserID(text)}
            />

        <Text style={styles.label}>Driver Id</Text>
            <TextInput
                placeholder='Enter your ID'
                style={styles.input}
                value={DriverID}
                // keyboardType="numeric"
                onChangeText={text => setDriverID(text)}
            />

        <Text style={styles.label}>Bus No</Text>
            <TextInput
                placeholder='Enter Bus No'
                style={styles.input}
                value={BusNo}
                onChangeText={text => setBusNo(text)}
            />

        <Text style={styles.label}>Route</Text>
            <TextInput
                placeholder='Enter Route'
                style={styles.input}
                value={Route}
                onChangeText={text => setRoute(text)}
            />

        <Text style={styles.label}>Start Location</Text>
            <TextInput
                placeholder='Enter Start Location'
                style={styles.input}
                value={StartLocation}
                onChangeText={text => setStartLocation(text)}
            />

        <Text style={styles.label}>End Location</Text>
            <TextInput
                placeholder='Enter End Location'
                style={styles.input}
                value={EndLocation}
                onChangeText={text => setEndLocation(text)}
            />

        <Text style={styles.label}>Fare</Text>
        <TextInput
                placeholder='LKR 0.00'
                style={styles.input}
                value={Fare}
                keyboardType="numeric"
                underlineColorAndroid = "transparent"
                onChangeText={text => setFare(text)}
            />

        <Text style={styles.label}>Date</Text>
            <DatePicker
                mode="monthYear"
                selectorStartingYear={2022}
                onMonthYearChange={selectedDate => setDate(selectedDate)}
                value={date}
            />
            <TextInput
                placeholder='MM/YY'
                style={styles.input}
                value={date}
                keyboardType="datetime"
                // onMonthYearChange={selectedDate => setExpireDate(selectedDate)}
            />
            
        <Text style={styles.label}>Time</Text>
            {/* <DateTimePicker
                style={styles.input}
                value={Time}
                onChangeText={text => setTime(text)}
            /> */}
            <TextInput
                placeholder='LKR 0.00'
                style={styles.input}
                value={Fare}
                keyboardType="numeric"
                underlineColorAndroid = "transparent"
                onChangeText={text => setFare(text)}
            />
        
      <Button title='Add' color={'#00008b'} style={styles.button} onPress={() => console.log(hname)}/>

    </SafeAreaView>

    </ScrollView>
)
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    button: {
        margin:12,
        padding:5,       
        
    },
    topic: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    label: {
        fontWeight: 'bold',
        padding: 5
    },
    view: {
        backgroundColor: 'white',
    },
    form: {
        padding: 5,
    },
    
  });

export default AddJourney;
