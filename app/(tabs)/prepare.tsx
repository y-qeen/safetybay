import { Text, View, StyleSheet } from 'react-native';

export default function PrepareScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prepare</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Before an Emergency</Text>
        <Text style={styles.paragraphText}>
          [Placeholder text about emergency preparedness...]
        </Text>
      </View>

      {/* Rest of your list... */}
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
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragraphText: {
    lineHeight: 24,
    marginTop: 8,
  },
  section:{
    padding: 1,
  },

  }
);