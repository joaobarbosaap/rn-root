import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";

// set the host and the port property to connect to the emulator
// set these before any read/write operations occur to ensure it doesn't affect your Cloud Firestore data!

firestore().useEmulator("localhost", 8080);
const db = firestore();

const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [users, setUsers] = useState([{ name: "etevlao2" }]);
  useEffect(() => {
    db.collection("teste2").onSnapshot((querySnapshot) => {
      const newUsers = [];

      querySnapshot.forEach((documentSnapshot) => {
        newUsers.push(documentSnapshot.data());
      });
      console.log(newUsers);
      setUsers(newUsers);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app232!</Text>

      <Button
        label="insert"
        onPress={() => {
          db.collection("teste2").add({
            name: "Tesssssss222",
          });

          db.collection("teste3").add({
            name: "Tesssssss222",
          });

          db.collection("teste4").add({
            name: "Tesssssss222",
          });

          db.collection("teste5").add({
            name: "Tesssssss222",
          });
        }}
      />

      {users.map((user, index) => {
        return user && <Text key={index}>{user.name}</Text>;
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#4630eb",
    borderRadius: 4,
    padding: 12,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
