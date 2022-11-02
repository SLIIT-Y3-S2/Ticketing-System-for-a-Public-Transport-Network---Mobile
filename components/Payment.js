import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput,Button,ScrollView,Text } from "react-native";
import DatePicker from 'react-native-modern-datepicker';

const Payment = () => {
  const [validated, setvalidated] = useState(false);
  const [hname, setHolderName] = useState("");
  const [cno, setCardNo] = useState("");
  const [expdate, setExpireDate] = useState("");
  const [cvc, setcvc] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <ScrollView style={styles.view}>

    <Text style={styles.topic}>Recharge Account</Text>
    <SafeAreaView style={styles.form}>

        <Text style={styles.label}>Card Holder's Name</Text>
            <TextInput
                placeholder='Enter your name'
                style={styles.input}
                value={hname}
                onChangeText={text => setHolderName(text)}
            />

        <Text style={styles.label}>Card Number</Text>
            <TextInput
                placeholder='xxxx xxxx xxxx xxxx'
                style={styles.input}
                value={cno}
                keyboardType="numeric"
                onChangeText={text => setCardNo(text)}
            />

        <Text style={styles.label}>Expiry Date</Text>
            <DatePicker
                mode="monthYear"
                selectorStartingYear={2022}
                onMonthYearChange={selectedDate => setExpireDate(selectedDate)}
                value={expdate}
            />
            <TextInput
                placeholder='MM/YY'
                style={styles.input}
                value={expdate}
                keyboardType="datetime"
                // onMonthYearChange={selectedDate => setExpireDate(selectedDate)}
            />
            
        
        <Text style={styles.label}>CVC</Text>
            <TextInput
                placeholder='xxx'
                style={styles.input}
                value={cvc}
                keyboardType="numeric"
                onChangeText={text => setcvc(text)}
            />

        <Text style={styles.label}>Amount</Text>
            <TextInput
                placeholder='LKR 0.00'
                style={styles.input}
                value={amount}
                keyboardType="numeric"
                underlineColorAndroid = "transparent"
                onChangeText={text => setAmount(text)}
            />
        
      <Button title='PAY' color={'#00008b'} style={styles.button} onPress={() => console.log(hname)}/>

    </SafeAreaView>

    </ScrollView>

    
  )
}

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
        padding: 10,
        backgroundColor: '#00bfff',
    },
    form: {
        padding: 5,
    },
    
  });

export default Payment