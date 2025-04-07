import { Text, View, TouchableOpacity, Pressable, Image } from "react-native";
import {styles} from "../../styles/auth.styles"
import { Link } from "expo-router";
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

      <Image source={require("../../assets/images/favicon.png")} />

      <Link href={"/notification"}> visit notification Screen </Link>
    </View>
  );
}
