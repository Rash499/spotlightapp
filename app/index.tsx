import { Text, View, TouchableOpacity, Pressable } from "react-native";
import {styles} from "../styles/auth.styles"
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <TouchableOpacity onPress={() => alert("Touched!")}>
        <Text>Click Me</Text>
      </TouchableOpacity>

      <Pressable onPress={() => alert("Pressed!")}>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
}
