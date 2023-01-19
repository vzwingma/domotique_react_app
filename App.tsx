/**
 * Domotique React Native App
 * v0.0.1
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';
import Section from "./src/main/Section.component";
import * as ClientHTTP from "./src/main/services/ClientHTTP.service";

function startDomotic(){
  console.log("Start Domoticz")

  const formData = new FormData();
  formData.append("username", "Z")
  formData.append("password", "9")
  formData.append("rememberme", false)


  ClientHTTP.call('POST', 'https://192.168.1.83:8443', '/json.htm?type=command&param=logincheck', null, formData)
      .then(data => console.log(data))
      .catch(e => {
        console.error("Erreur " + e);
      })
}

function App(): JSX.Element {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  startDomotic();
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Section title="Domoticz">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>

          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
