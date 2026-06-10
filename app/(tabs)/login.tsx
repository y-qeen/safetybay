import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>SafetyBay</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#114b5f"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#114b5f"}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.login}
        onPress={() =>
          router.replace({
            pathname: "/(tabs)/prepare",
            params: { username: email },
          })
        }
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signup}>Don't have an account? Sign up</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#9BC1BC",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
    color: "#114b5f",
  },

  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#E6EBE0",
  },
  signup: {
    marginTop: 17,
    textAlign: "center",
    color: "#114b5f",
    fontSize: 16,
    fontStyle: "italic",
  },
  login: {
    backgroundColor: "#F4F1BB",
    padding: 15,
    alignSelf: "center",
    width: 120,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "#114b5f",
    fontWeight: 600,
    fontSize: 18,
    textAlign: "center",
  },
});
