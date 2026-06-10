import { View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useRouter} from "expo-router";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View style ={styles.container}>
      <Text style ={styles.title}>SafetyBay</Text>
      <TextInput
        style ={styles.input}
        placeholder = "Email"
        placeholderTextColor= {"#114b5f"}
        value = {email}
        onChangeText = {setEmail}

      />
      <TextInput
        style ={styles.input}
        placeholder = "Password"
        placeholderTextColor= {"#114b5f"}
        value = {password}
        onChangeText = {setPassword}

      />
      <TouchableOpacity
        style ={styles.login}
        onPress={() =>
          router.replace({
            pathname: "/prepare",
            params: { username: email },
        })
        }
      >
        <Text style = {styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style = {styles.signup}>Don't have an account? Sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#114b5f",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign:"center",
    marginBottom: 50,
    color: "#E6EBE0",
  },

  input:{
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor:"#E6EBE0"
  },
  signup:{
    marginTop: 17,
    textAlign: "center",
    color: "#9BC1BC",
    fontSize: 16,
    fontStyle: "italic",
  },
  login:{
    backgroundColor: "#E6EBE0",
    padding: 15,
    alignSelf: "center",
    width: 120,
    borderRadius: 15,
    marginTop: 20,

  },
  buttonText:{
    color: "#114b5f",
    fontWeight: 600,
    fontSize: 18,
    textAlign: "center",
  }
});