// import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StatusBar, TextInput, View } from "react-native";
import { stylesMain } from "./styles/main";
import { useState } from "react";
import List from "./components/List";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handlePress = () => {
    setList((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <>
      <StatusBar style='light'  />
      <View style={stylesMain.mainStart}>
        <View style={stylesMain.inputContainer}>
          <TextInput
            style={stylesMain.textInput}
            onChangeText={(e) => setInput(e)}
            value={input}
            placeholder='Your course Goal!'
          />
          <Button onPress={() => handlePress()} title='Add Goal' />
        </View>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return <List text={itemData.item} setList={setList} list={list} />;
          }}
          style={stylesMain.list}
        />
      </View>
    </>
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
