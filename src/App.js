/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   ImageBackground,
   Image,
   Pressable,
   Alert,
 } from 'react-native';
 
 import {
    darkText,
    lightText,
    paleButton,
    paleButtonPressed,
    paleWhite,
    veryPaleWhite,
 } from './resources/ColorPalette'

 import BackgroundImage from '../assets/cesira-alvarado-dxIIYAiR2xw-unsplash.jpeg'
 const lightBackground = Image.resolveAssetSource(BackgroundImage).uri
 const darkBackground = Image.resolveAssetSource(BackgroundImage).uri
 
 const Section = ({children, title, secondTitle}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
    <SafeAreaView style={{flex: 1}}>
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? lightText : darkText,
           },
         ]}>
         {title}
       </Text>
       <Text style={[
           styles.secondSectionTitle, 
           { color: isDarkMode ? lightText : darkText},
        ]}
       >
           {secondTitle}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? lightText : darkText,
           },
         ]}>
         {children}
       </Text>
     </View>
     </SafeAreaView>
   );
 };
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const image = { uri: isDarkMode ? darkBackground : lightBackground }

   const buttonString = 'Find Out More'.toUpperCase()
 
   return (
       <View style={{flex: 1}}>
         <View style={{flex: 1}}>
             <ImageBackground
                source={image}
                resizeMode='cover'
                style={{flex: 1, justifyContent: 'center', opacity: 0.5}}
             >
             </ImageBackground>
         </View>
         <View style={{position: 'absolute', top: 0, left: 0, height:'100%', width:'100%'}}>
            <Section 
                title='Welcome to'
                secondTitle='Dos Amigos Software'
            >
                Specializing in mobile software (iOS/Android) development using <Text style={styles.highlight}>React Native</Text>
            </Section>
            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-start', margin: 20 }}>
                <Pressable
                    onPress={() => Alert.alert('Pressed', 'I was pressed!')}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? paleButtonPressed
                                : paleButton
                        },
                        {
                            borderRadius: 38,
                            padding: 16
                        }
                    ]}
                >
                    <Text style={[
                        styles.buttonText, 
                        {color: isDarkMode ? lightText : veryPaleWhite}
                    ]}>{buttonString}</Text>
                </Pressable>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', margin: 20 }}>
                <Pressable
                    onPress={() => Alert.alert('Place holder', "link to Alvarado's photo")}
                    style={({pressed}) => [
                        {
                        backgroundColor: pressed
                            ? paleButtonPressed
                            : null
                        }
                    ]}
                >
                    <Text 
                        style={[{ color: isDarkMode ? lightText : darkText }, styles.attribute]}
                    >
                        Photo by Cesira Alvarado
                    </Text>
                </Pressable>
            </View>

         </View>
        </View>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   buttonText: {
    fontSize: 20,
    fontWeight: '900',
    color: 'green',
   },
   attribute: {
    opacity: 0.6
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   secondSectionTitle: {
       fontSize: 30,
       fontWeight: '900'
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   image: {
     flex: 1,
     justifyContent: 'center',
     opacity: 0.2
   },
 });
 
 export default App;
 