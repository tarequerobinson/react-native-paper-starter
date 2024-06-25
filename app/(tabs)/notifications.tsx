import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { List, Divider, Text, Appbar } from 'react-native-paper';

const notifications = [
  { id: 1, title: 'Order Shipped', description: 'Your order #12345 has been shipped.', date: '2023-01-01' },
  { id: 2, title: 'Order Delivered', description: 'Your order #12345 has been delivered.', date: '2023-01-02' },
  { id: 3, title: 'New Message', description: 'You have a new message from support.', date: '2023-01-03' },
  { id: 4, title: 'Promotion', description: 'Check out our new promotions.', date: '2023-01-04' },
];

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Notifications" />
      </Appbar.Header>
      <ScrollView>
        {notifications.map((notification, index) => (
          <View key={notification.id}>
            <List.Item
              title={notification.title}
              description={notification.description}
              right={() => <Text style={styles.date}>{notification.date}</Text>}
            />
            {index < notifications.length - 1 && <Divider />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  date: {
    alignSelf: 'center',
    marginRight: 10,
    color: '#888',
  },
});
