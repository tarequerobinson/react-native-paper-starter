import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, ToastAndroid, View } from 'react-native';
import { Card, Title, Paragraph, Text , Badge, ThemeProvider, PaperProvider } from 'react-native-paper';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import * as Clipboard from 'expo-clipboard';
import { useColorScheme , useWindowDimensions } from 'react-native';
import Dashboard from '@/components/Dashboard';
import Addresses from '@/components/Addresses';
import { TabView, SceneMap , TabBar} from 'react-native-tab-view';
import PreAlert from '@/components/PreAlert';
import { useRouter } from 'expo-router';




export default function HomeScreen() {
  const [balance, setBalance] = React.useState(2000);
  const [availablePackages, setAvailablePackages] = React.useState(3);
  const [inTransit, setInTransit] = React.useState(1);
  const [delivered, setDelivered] = React.useState(5);

  const addressText = "123 Main Street, Suite 400, San Francisco, CA 94105";
  const colorScheme = useColorScheme();
  const router = useRouter();



  const NotificationIcon = ({ color, focused }) => <TabBarIcon name={focused ? 'notifications' : 'notifications-outline'} color={ colorScheme === 'dark' ? "white": color } />;

  const InTransitIcon = ({ color, focused }) => <TabBarIcon name={focused ? 'hourglass' : 'hourglass-outline'} color={ colorScheme === 'dark' ? "white": color } />;
const BalanceIcon = ({ color, focused }) => <TabBarIcon name={focused ? 'cash' : 'cash-outline'} color={ colorScheme === 'dark' ? "#AFE1AF": color }  />;
const PackagesIcon = ({ color, focused }) => <TabBarIcon name={focused ? 'cube' : 'cube-outline'} color={ colorScheme === 'dark' ? "yellow": color }  />;
const AddressIcon = ({ color, focused }) => <TabBarIcon name={focused ? 'pin' : 'pin-outline'} color={ colorScheme === 'dark' ? "red": color }  />;
const DeliveredIcon = ({ color, focused }) => <TabBarIcon name={focused ? 'home' : 'home-outline'} color={ colorScheme === 'dark' ? "green": color } />;
const AirShippingAddressIcon  = ({ color, focused }) => <TabBarIcon name={focused ? 'airplane' : 'airplane-outline'} color={ colorScheme === 'dark' ? "skyblue": color } />;
const SeaShippingAddressIcon  = ({ color, focused }) => <TabBarIcon name={focused ? 'boat' : 'boat-outline'} color={ colorScheme === 'dark' ? "skyblue": color } />;

  const handleCopyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
    ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
  };


  const renderScene = SceneMap({
    first: Dashboard,
    second: Addresses,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Dashboard' },
    { key: 'second', title: 'Addresses' },
  ]);
  const layout = useWindowDimensions();


  const backgroundColor:string = (colorScheme === 'dark' ? "#": "#");
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "gold" }}
      style={{ backgroundColor: backgroundColor }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ backgroundColor, margin: 8 }}>
          {route.title}
        </Text>
      )}
    
    />
  );



  



  return (
    <View style={styles.container}>
      <View style={styles.header} >
<View>

<Text variant="headlineLarge">Dashboard</Text>
      <Text variant="headlineSmall">Welcome, Tareque</Text>

</View>
      
<TouchableOpacity 


onPress={() => router.push({
  pathname: 'Notifications',
  // params: {
  //   song: JSON.stringify(item),
  // },
})}  
>

<View>

      <Badge>100</Badge>
      <NotificationIcon style={styles.notification} />

</View>
</TouchableOpacity>


      </View>


{/* <Dashboard/>
<Addresses/> */}

<TabView
    renderTabBar={renderTabBar}

      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 10,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,


  },

  notification:{

    padding: "auto",


  },

  cardBox: {
    
    margin: 5,
    minWidth: 180,
    borderRadius: 10,
    borderColor:"white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    // backgroundColor: '#001222',
    height: "auto",
  },
  cardBoxStandalone: {

    // paddingTop:10,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    height: "auto",
  },
cardContent: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  scrollableStandalone:{
// height:900
    // paddingVertical: 10, // Adjusted padding for standalone cards
    // paddingBottom: 0, // Adjusted padding for standalone cards
// overflow: "visible",
paddingVertical: 10,

  },
  cardContentStandalone: {
    // paddingVertical: 10, // Adjusted padding for standalone cards
    
  },
  cardTitle: {
    fontSize: 14,
    paddingVertical: 0,
    marginVertical: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
  },
});







// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     padding: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   notificationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   badge: {
//     marginRight: 5,
//   },
//   notification: {
//     padding: "auto",
//   },
//   cardBox: {
//     margin: 5,
//     minWidth: 180,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//     minHeight: 130,
//   },
//   cardBoxStandalone: {
//     margin: 5,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//     height: 130,
//   },
//   cardContent: {
//     alignItems: 'center',
//     paddingVertical: 5,
//   },
//   scrollableStandalone: {
//     paddingVertical: 10,
//   },
//   cardContentStandalone: {},
//   cardTitle: {
//     fontSize: 14,
//     paddingVertical: 0,
//     marginVertical: 0,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 5,
//   },
//   paragraph: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });
