import { StyleSheet, Image, Platform, View } from 'react-native';
import { Text, Button, Modal, Portal, Provider } from 'react-native-paper';
import React, { useState } from 'react';
import CustomDialog from '@/components/ui/Dialog';
import Datatable from '@/components/ui/Datatable';

export default function TabTwoScreen() {
  const [visible, setVisible] = useState(false); // State to control modal visibility

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    // <Provider>

      <View style={styles.container}>
      <Text variant="headlineLarge">Your Packages</Text>


        <View style={styles.centered}>
          <Datatable/>
        </View>

      </View>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 50,
    padding:10
    // backgroundColor: '#fff', // Adjust background color as needed
  },
  centered: {
    alignItems: 'center',
    // marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
});
