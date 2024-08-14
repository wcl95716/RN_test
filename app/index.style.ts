import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingVertical: 20,
      paddingHorizontal: 10,
      backgroundColor: "#f0f0f0",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "#333",
    },
    section: {
      marginBottom: 30,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: "600",
      marginBottom: 15,
      color: "#2a2a2a",
    },
    cardContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    card: {
      backgroundColor: "#4CAF50",
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      width: "48%",
      alignItems: "center",
    },
    cardText: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "500",
    },
    link: {
      textDecorationLine: "none",
    },
  });
  