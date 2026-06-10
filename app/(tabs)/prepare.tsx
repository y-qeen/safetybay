import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";


export default function PrepareScreen() {
  const { username } = useLocalSearchParams();

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
      </View>
        <View style = {styles.list}>
          <Text style={styles.subtitle}>
          Emergency Kit Checklist
        </Text>
        <Text style = {styles.paragraphText}></Text>
          <Text style = {styles.item}>• Flashlight</Text>
          <Text style = {styles.item}>• First Aid Kit</Text>
          <Text style = {styles.item}>• Water</Text>
          <Text style = {styles.item}>• Medicine and Hygiene items</Text>
          <Text style = {styles.item}>• Non-perishable food</Text>
          <Text style = {styles.item}>• Rechargable battery packs</Text>
          <Text style = {styles.item}>• Cash</Text>
          <Text style = {styles.item}>• Multi-tool wrench</Text>
          <Text style = {styles.item}>• Important Documents</Text>
          <Text style = {styles.item}>• Clothing and blankets</Text>
        </View>
        <View style={styles.tips}>
          <Text style={styles.subtitle}> Safety Tips</Text>
          <Text style = {styles.paragraphText}></Text>
          <Text style = {styles.item}>• Avoid flood-prone zones</Text>
          <Text style = {styles.item}>• Know the nearest Evacuation Center</Text>
          <Text style = {styles.item}>• Know your Emergency Contacts</Text>
        </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  tips:{
    backgroundColor: "#E6EBE0",
    padding: 20,
    borderRadius: 15,
    borderColor: "#ED6A5A",
    borderWidth: 3,
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#9BC1BC",
    
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#114b5f",
    marginBottom: 30,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#114b5f",
  },
  paragraphText: {
    lineHeight: 24,
    marginTop: 8,
    color: "#114b5f",
  },
  section: {
    padding: 20,
    backgroundColor: "#E6EBE0",
    borderRadius: 15,
    
  },
  list:{
    
    marginTop:10,
    fontWeight: 400,
    backgroundColor: "#E6EBE0",
    padding:20,
    borderRadius: 15,
    marginBottom:20,
    borderColor: "#ED6A5A",
    borderWidth: 3,
  },
  item:{
    color: "#114b5f",
    marginLeft: 20,
  }
});
