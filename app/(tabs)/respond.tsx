import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
type StatusType = "Need Help" | "Safe but Alert" | "All Clear";

type Report= {
    username: string;
    status: StatusType;
    landmark: string;
    timestamp: number;
};

export default function RespondScreen(){
    const [landmark, setLandmark] = useState<string>("");

    const sendStatus = (status: StatusType) =>{
        const report : Report={
            username: "Yaqeen",
            status,
            landmark: landmark.trim() || "No landmark provided",
            timestamp: Date.now(),
        };

        console.log(report);

        Alert.alert("Alert sent!", 'Status: ${status}');

    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Stay Notified!</Text>
            <TextInput
                style={styles.input}
                placeholder = "Enter the nearest store or landmark you see"
                value= {landmark}
                onChangeText = {setLandmark}

                />
                <TouchableOpacity
                    style= {[styles.button, styles.help]}
                    onPress={() => sendStatus("Need Help")}

                >
                    <Text style = {styles.buttonText}>Need Help</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style= {[styles.button, styles.alert]}
                    onPress={() => sendStatus("Safe but Alert")}

                >
                    <Text style = {styles.buttonText}>Safe but Cautious</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style= {[styles.button, styles.safe]}
                    onPress={() => sendStatus("All Clear")}

                >
                    <Text style = {styles.buttonText}>Doing okay!</Text>
                </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#114b5f",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E6EBE0",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#E6EBE0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    padding: 18,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  help: {
    backgroundColor: "#ef4444",
  },
  alert: {
    backgroundColor: "#f59e0b",
  },
  safe: {
    backgroundColor: "#22c55e",
  },





})