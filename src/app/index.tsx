import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href="/(tabs)/one" asChild>
        <Button title="go to tab screen!" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
