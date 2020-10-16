import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
    const myName = 'Venom';
    return(
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.secondText}>My name is {myName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 50,
        textAlign: "center",
    },
    secondText:{
        fontSize: 20,
        textAlign: 'center'
    }
});

export default ComponentScreen;