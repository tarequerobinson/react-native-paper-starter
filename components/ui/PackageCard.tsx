import * as React from 'react';
import { Provider, Card, Title, Paragraph, Divider, Subheading } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import generateLightTheme from '@/constants/Themes/generateLightTheme';
import generateDarkTheme from '@/constants/Themes/generateDarkTheme';
import { MD3LightTheme as PaperDefaultTheme, MD3DarkTheme as PaperDarkTheme, PaperProvider } from 'react-native-paper';


import Navbar from '@/components/AppBar';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.

  const lightTheme = generateLightTheme("#4B9CD3");
  const darkTheme = generateDarkTheme("#4B9CD3");

  generateDarkTheme

const DefaultTheme = {
  ...PaperDefaultTheme, // or MD3DarkTheme
  roundness: 2,
  colors: lightTheme
};


const DarkTheme = {
  ...PaperDarkTheme, // or MD3DarkTheme
  roundness: 2,
  colors: darkTheme
};




const PackageCard = ({ packageData }) => (
  <View style={styles.container}  >
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Title style={styles.title}>{`Package: ${packageData.pkg_number}`}</Title>
            <Paragraph style={styles.paragraph}>{`Invoice: ${packageData.invoice}`}</Paragraph>
            <Paragraph style={styles.paragraph}>{`Tracking: ${packageData.tracking_number}`}</Paragraph>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.infoContainer}>
          <View style={styles.column}>
            <Subheading style={styles.label}>Shipper:</Subheading>
            <Paragraph style={styles.value}>{packageData.shipper}</Paragraph>
          </View>
          <View style={styles.column}>
            <Subheading style={styles.label}>Weight:</Subheading>
            <Paragraph style={styles.value}>{`${packageData.weight} lbs`}</Paragraph>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.infoContainer}>
          <View style={styles.column}>
            <Subheading style={styles.label}>Received:</Subheading>
            <Paragraph style={styles.value}>{packageData.date_received}</Paragraph>
          </View>
          <View style={styles.column}>
            <Subheading style={styles.label}>Status:</Subheading>
            <Paragraph style={styles.value}>{packageData.status}</Paragraph>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.infoContainer}>
          <View style={styles.column}>
            <Subheading style={styles.label}>Location:</Subheading>
            <Paragraph style={styles.value}>{packageData.pickup_location}</Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: 50,
  //   backgroundColor: '#ffff',
  //   padding: 10,
  // },

  card: {
    width: 300,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 3,
    padding: 10,
    // backgroundColor: '#ffff',

  },
  title: {
    fontSize: 16,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 4,
  },
  divider: {
    marginVertical: 6,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
  },
  headerText: {
    flexDirection: 'column',
    marginBottom: 4,
  },
});

export default PackageCard;
