import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import  CustomDialog from '@/components/ui/Dialog'
import CustomModal from '@/components/ui/Modal';
import { View } from 'react-native';

export default function TabThreeScreen() {
  return (

    <View>

<CustomModal/>

    {/* <ParallaxScrollView
      headerBackgroundColor={{ light: '#AFE1AF', dark: '#023020' }}
      headerImage={<Ionicons size={310} name="time" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Quick Starter</ThemedText>
      </ThemedView>
      <ThemedText>This custom starter project includes React Native Paper and Expo to help me get started quickly.</ThemedText>
      
      
         <Collapsible title="React Native Paper">
        <ThemedText>
This is a UI component library which uses the Material UI design. This makes me work faster by using predefined styled components.        </ThemedText>
      </Collapsible>

      <Collapsible title="UI Components">
        <ThemedText>
I have created a folder specifically for UI components so that I can easily import them and use throughout the project.
</ThemedText>
      </Collapsible>


    </ParallaxScrollView> */}
    </View>

  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
