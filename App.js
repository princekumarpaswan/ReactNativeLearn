// import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { stylesMain } from "./styles/main";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handlePress = () => {
    setList((prev) => [...prev, input]);
  };

  const handleRemove = (key) => {
    console.log(key);
  };

  return (
    <View style={stylesMain.mainStart}>
      <View style={stylesMain.inputContainer}>
        <TextInput
          style={stylesMain.textInput}
          onChangeText={(e) => setInput(e)}
          value={input}
          placeholder="Your course Goal!"
        />
        <Button onPress={() => handlePress()} title="Add Goal" />
      </View>
      <ScrollView style={stylesMain.list}>
        {list.map((item, index) => (
          <View key={index + item} style={stylesMain.items}>
            <Text onLongPress={(e) => handleRemove(e.target.children)}>
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
