import { MD3LightTheme as PaperDefaultTheme, MD3DarkTheme as PaperDarkTheme, PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';
import 'react-native-reanimated';
// import lightTheme from '@/constants/Themes/lightTheme';
// import darkTheme from '@/constants/Themes/darkTheme';
import { useColorScheme, View} from 'react-native';
import generateLightTheme from '@/constants/Themes/generateLightTheme';
import generateDarkTheme from '@/constants/Themes/generateDarkTheme';
import PreAlert from '@/components/PreAlert';

import Navbar from '@/components/AppBar';

// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

  // Example usage:
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







export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const colorScheme = useColorScheme();
  const theme = (colorScheme === 'dark' ? DarkTheme  : DefaultTheme);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }







  return (
    <PaperProvider theme={theme} >
{/* <Navbar/> */}

<View>

<PreAlert/>

</View>
        <Stack>
          
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          {/* <Stack.Screen name="Notifications" options={{ title: 'Notifications' }} /> */}

        </Stack>
    </PaperProvider>
  );
}
















