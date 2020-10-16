import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const INCREMENT = 1;

const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {...state, count: state.count + action.payload};
        case 'decrease':
            return {...state, count: state.count + action.payload};
        default:
            return state;

    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const {count} = state;
    
    return(
        <View>
            <Button 
            onPress={() => {
                dispatch({type: 'increase', payload: INCREMENT});
            }}
            title='Increase'
            />
            <Button 
            onPress={() => {
                dispatch({type: 'decrease', payload: -1*INCREMENT});
            }}
            title='Decrease'
            />
            <Text style={styles.textStyle} >Current Count: {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        textAlign: "center",
        marginTop: 50
    }
});

export default CounterScreen;