import { View, Text, Pressable, Vibration } from "react-native";
import { stylesMain } from "../styles/main";

const List = ({ text, list, setList }) => {
  const deleteItems = () => {
    const filteredData = list.filter((item) => item != text);
    setList(filteredData);
    Vibration.vibrate(70);
  };

  return (
    <View style={stylesMain.items}>
      <Pressable
        android_ripple={{ color: "#5e0acc" }}
        // style={({pressed}) => pressed && stylesMain.ios}
        onLongPress={() => deleteItems()}>
        <Text style={stylesMain.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default List;
