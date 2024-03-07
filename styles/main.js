import { StyleSheet } from "react-native";

export const stylesMain = StyleSheet.create({
  mainStart: {
   padding: 50,
   justifyContent: "center",
   alignItems: "start",
   flex: 1,
   paddingLeft: 15,
   backgroundColor: "black",
  },
  inputContainer:{
    // flex: 1,
    flexDirection:"row",
    gap: 15,
    marginBottom: 30
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "80%",
    padding: 2,
    paddingLeft: 10,
    color: "white"
  },
  list:{
    flex: 2,
  },
  items: {
    margin: 8,
    // padding: 8,
    borderRadius: 6,
    backgroundColor: "#EA7773",
 
  },
  text:{
    padding: 8,
    color: "white"
  },
  ios: {
    backgroundColor: 'green',
    opacity: 0.5
  }
});
