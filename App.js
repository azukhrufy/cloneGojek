

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
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
      <View style={{flex:1, backgroundColor: 'green'}}>
        <Text>Clone Gojek App</Text>
      </View>

      {/* bagian bottom navigation */}
      <View style={{backgroundColor: 'white', height: 54, flexDirection: 'row' }}>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <Image source={require('./icon/home-active.png')} />
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: 'green', marginTop: 4}}>Home</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <Image source={require('./icon/order.png')} />
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: '#545454', marginTop: 4}}>Orders</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <Image source={require('./icon/help.png')} />
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: '#545454', marginTop: 4}}>Help</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <Image source={require('./icon/inbox.png')} />
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: '#545454', marginTop: 4}}>Inbox</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <Image source={require('./icon/account.png')} />
          <Text style={{fontSize: 10, fontFamily: 'roboto', color: '#545454', marginTop: 4}}>Account</Text>
        </View>
      </View>
    </View>
      
  );
};


export default App;
