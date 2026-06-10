import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useLocalSearchParams } from "expo-router";


type StatusType = "Need Help" | "Safe but Alert" | "All Clear";

type Report = {
  username: string;
  status: StatusType;
  landmark: string;
  timestamp: number;
};

export default function RespondScreen() {
    const [statusText, setStatusText] = useState<string>("All Clear");
    const [landmark, setLandmark] = useState<string>("");

    const { username } = useLocalSearchParams();

    const sendStatus = async (status: StatusType) => {
        try {
        const report: Report = {
            username: username as string,
            status,
            landmark: landmark || "No landmark provided",
            timestamp: Date.now(),
        };

        await addDoc(collection(db, "reports"), report);

        Alert.alert("Sent!", "Your status has been shared.");
        setLandmark("");
        } catch (error) {
        console.log(error);
        Alert.alert("Error", "Could not send status.");
        }
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
    backgroundColor: "#9BC1BC",
},
title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#114b5f",
    marginBottom: 45,
    textAlign: "center",
},
input: {
    backgroundColor: "#E6EBE0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    color: "#114b5f",
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