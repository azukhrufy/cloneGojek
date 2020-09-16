

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={{backgroundColor: 'pink',flex: 1 }} >
      <View style={{flex:1, backgroundColor: 'green'}}></View>

      {/* bagian bottom navigation */}
      <View style={{backgroundColor: 'white', height: 54, flexDirection: 'row' }}>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <View style={{height:26, width:26, backgroundColor: 'blue'}}></View>
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: '#545454', marginTop: 4}}>Home</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <View style={{height:26, width:26, backgroundColor: 'blue'}}></View>
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: '#545454', marginTop: 4}}>Orders</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <View style={{height:26, width:26, backgroundColor: 'blue'}}></View>
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: '#545454', marginTop: 4}}>Help</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <View style={{height:26, width:26, backgroundColor: 'blue'}}></View>
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: '#545454', marginTop: 4}}>Inbox</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <View style={{height:26, width:26, backgroundColor: 'blue'}}></View>
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: '#545454', marginTop: 4}}>Account</Text>
        </View>
      </View>
    </View>
      
  );
};


export default App;
