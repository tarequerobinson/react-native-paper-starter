import * as React from 'react';
import { Provider, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';
import PackageCard from './PackageCard';

const Datatable = () => {
  const [items] = React.useState([
    {
      key: 1, invoice: 'INV-001', pkg_number: 'PKG-001', tracking_number: 'TRK-001', 
      shipper: 'Company A', weight: 10.5, date_received: '2023-06-01', date_created: '2023-05-25', 
      date_marked_as_collected: '2023-06-05', employee_that_marked_as_collected: 'Employee 1', 
      status: 'Delivered', due: 15.0, pickup_location: 'Location A'
    },
    {
      key: 2, invoice: 'INV-002', pkg_number: 'PKG-002', tracking_number: 'TRK-002', 
      shipper: 'Company B', weight: 8.2, date_received: '2023-06-02', date_created: '2023-05-26', 
      date_marked_as_collected: '2023-06-06', employee_that_marked_as_collected: 'Employee 2', 
      status: 'In Transit', due: 10.0, pickup_location: 'Location B'
    },
    // Add more package data here
  ]);

  return (
    // <Provider>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
        {items.map((item) => (
          <PackageCard key={item.key} packageData={item} />
        ))}
      </ScrollView>
    // </Provider>
  );
};

export default Datatable;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: 10,
    // backgroundColor: '#fff',
  },
  card: {
    // marginBottom: 10,
  },
});
