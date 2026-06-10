import { StyleSheet, Text, View } from "react-native";

export default function PrepareScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Be prepared!</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>About Natural Disasters</Text>
        <Text style={styles.paragraphText}>
          Natural disasters are natural occuring events that often cause
          significant damage to communities and our environment. Through
          improved research, scientists have found ways to predict the falls of
          these events. Though it is important to remember that they are still
          greatly unpredictable, meaning we should always be prepared for a
          heatwave or typhoon!
        </Text>
        <Text style={styles.paragraphText}>
          It's important to prepare an Emergency Disaster Kit! Here's what you should have:
        </Text>
      </View>
      <View style = {styles.list}>
        <Text>• Flashlight</Text>
        <Text>• First Aid Kit</Text>
        <Text>• Water</Text>
        <Text>• Medicine and Hygiene items</Text>
        <Text>• Non-perishable food</Text>
        <Text>• Rechargable battery packs</Text>
        <Text>• Cash</Text>
        <Text>• Multi-tool wrench</Text>
        <Text>• Important Documents</Text>
        <Text>• Clothing and blankets</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  paragraphText: {
    lineHeight: 24,
    marginTop: 8,
  },
  section: {
    padding: 1,
  },
  list:{
    flex: 1,
  }
});
