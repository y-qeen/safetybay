import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const options = ["Earthquake", "Flood", "Wildfire", "Hurricane", "Heatwaves"];

export default function RecoveryScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const optioninfo: Record<string, string[]> = {
    Earthquake: [
      "Aftershocks are expected, these can happen at any time. DROP, COVER, HOLD.",
      "Earthquakes may cause tsunamis, go inland and seek high ground.",
      "Find a first aid kit and take care of any injuries or wounds.",
      "Contact nearby centers or family/friends.",
    ],
    Flood: [
      "When re-entering your flooded home, beware of contaminated areas.",
      "Disinfect items that were in the flooded home.",
      "Don't drive in heavily flooded areas.",
      "Go to your Community Flood Evacuation center.",
    ],
    Wildfire: [
      "Wear long sleeved shirts and goggles to prevent ash falling on you.",
      "Contact authorities or nearby friends/family.",
      "If your home was affected by a wildfire, don't return home until authorities say it's safe.",
    ],
    Hurricane: [
      "If you have to be near rising floodwater, wear a life jacket.",
    ],
    Heatwaves: [
      "Stay hydrated!",
      "Find a cooler area to stay in.",
      "Avoid the usage of stoves and ovens to prevent extra heat.",
      "Do not engage in excessive physical activity.",
    ],
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#114b5f",
          textAlign: "center",
          marginBottom: 15,
        }}
      >
        Recovery Guide
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "#114b5f",
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: 5,
        }}
      >
        We've got your back!
      </Text>
      <View style={{ padding: 15, width: 300, alignSelf: "center" }}>
        <View
          style={{
            backgroundColor: "#114b5f",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <TouchableOpacity
            onPress={() => setOpen(!open)}
            style={{
              padding: 15,
            }}
          >
            <Text style={{ color: "#E6EBE0", fontWeight: "bold" }}>
              {selected || "Select Disaster Type"}
            </Text>
          </TouchableOpacity>

          {open && (
            <View>
              {options.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => {
                    setSelected(item);
                    setOpen(false);
                  }}
                  style={{
                    padding: 15,
                    borderTopWidth: 1,
                    borderTopColor: "#114b5f",
                  }}
                >
                  <Text style={{ color: "#9BC1BC" }}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
      {selected && (
        <View
          style={{
            backgroundColor: "#E6EBE0",
            borderRadius: 12,
            padding: 15,
            marginTop: 20,
            width: 300,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#114b5f",
              marginBottom: 10,
            }}
          >
            {selected} Recovery Steps
          </Text>

          {optioninfo[selected].map((step, index) => (
            <Text
              key={index}
              style={{
                color: "#114b5f",
                marginBottom: 8,
              }}
            >
              • {step}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#9BC1BC",
    flex: 1,
  },
});
