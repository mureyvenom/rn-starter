import React, {useState} from  'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');

    return(
        <View>
            <Text>Enter password:</Text>
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input} 
            value={password}
            onChangeText={(newValue) => {
                setPassword(newValue)
            }}
            />
            {password.length < 4 ? <Text>password must be longer than 4 characters</Text> : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 2
    }
});

export default TextScreen;