import React, { useState } from "react";
import { StyleSheet, View, TextInput, ScrollView } from "react-native";
import { Button, Text, Divider } from "react-native-paper"; // Assuming you use PaperProvider for styling

export default function Profile() {
  const [userProfile, setUserProfile] = useState({
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    username: "johndoe",
    website: "example.com",
    phone: "123-456-7890",
    address: {
      street: "123 Main St",
      city: "New York",
      zipcode: "10001",
    },
  });

  const [editing, setEditing] = useState(false); // State to toggle editing mode

  const handleSave = () => {
    // Logic to save changes (e.g., make API request to update user profile)
    // For demonstration purposes, we'll just log the updated profile
    console.log("Updated profile:", userProfile);
    setEditing(false); // Exit editing mode after saving
  };

  const handleEdit = () => {
    setEditing(true); // Enter editing mode
  };

  const handleChange = (key, value) => {
    setUserProfile({
      ...userProfile,
      [key]: value,
    });
  };

  return (

    <View>

<View style={styles.container}>
<Text variant="headlineLarge" style={styles.title} >
        Profile Settings
      </Text>



</View>

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={userProfile.name}
          onChangeText={(text) => handleChange("name", text)}
          editable={editing}
        />
        <Divider style={styles.divider} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={userProfile.email}
          onChangeText={(text) => handleChange("email", text)}
          editable={editing}
        />
        <Divider style={styles.divider} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={userProfile.username}
          onChangeText={(text) => handleChange("username", text)}
          editable={editing}
        />
        <Divider style={styles.divider} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Website</Text>
        <TextInput
          style={styles.input}
          value={userProfile.website}
          onChangeText={(text) => handleChange("website", text)}
          editable={editing}
        />
        <Divider style={styles.divider} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={userProfile.phone}
          onChangeText={(text) => handleChange("phone", text)}
          editable={editing}
        />
        <Divider style={styles.divider} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={`${userProfile.address.street}, ${userProfile.address.city}, ${userProfile.address.zipcode}`}
          onChangeText={(text) => handleChange("address", text)}
          editable={editing}
        />
        <Divider style={styles.divider} />
      </View>

      {editing ? (
        <Button mode="contained" onPress={handleSave} style={styles.button}>
          Save Changes
        </Button>
      ) : (
        <Button mode="outlined" onPress={handleEdit} style={styles.button}>
          Edit Profile
        </Button>
      )}
    </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: "#fafafa", // Light gray background similar to Instagram
    padding: 10,
    // paddingBottom: 50
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    // color: "#333", // Darker text color
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    // color: "#666", // Medium gray color for labels
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd", // Light gray border
    borderRadius: 8, // Rounded corners
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff", // White background for inputs
  },
  divider: {
    marginVertical: 10,
    // backgroundColor: "#ddd", // Light gray divider
  },
  button: {
    marginBottom: 70,
  },
});
