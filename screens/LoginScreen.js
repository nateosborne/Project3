import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button, List } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        Go to Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
