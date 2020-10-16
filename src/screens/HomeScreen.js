import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Venom Here</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Goto components demo'
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title='Goto list demo'
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title='Goto image demo'
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Goto counter demo'
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title='Goto color demo'
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title='Goto color adjuster demo'
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title='Goto color input demo'
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title='Goto color box demo'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 20
  }
});

export default HomeScreen;
