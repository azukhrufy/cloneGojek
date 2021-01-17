import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
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
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* search bar */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 17,
            marginVertical: 17,
          }}>
          <View style={{flex: 8, position: 'relative'}}>
            <TextInput
              placeholder="What do you want to eat ?"
              style={{
                borderWidth: 1,
                borderColor: '#c4c4c4',
                borderRadius: 50,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
              }}
            />
            <Image
              source={require('./icon/search.png')}
              style={{
                position: 'absolute',
                top: 7,
                left: 8,
              }}
            />
          </View>
          <View style={{flex: 1, width: 35, alignItems: 'center'}}>
            <Image
              source={require('./icon/promo.png')}
              style={{marginTop: 6, marginLeft: 16}}
            />
          </View>
        </View>
        {/* Gopay Section */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 18,
              paddingHorizontal: 10,
              paddingVertical: 16,
              backgroundColor: '#2C5FB8',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}>
            <Image source={require('./icon/gopay.png')} />
            <Text
              style={{
                fontFamily: 'roboto',
                fontSize: 17,
                color: 'white',
                fontWeight: '700',
              }}>
              Rp.50.456
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 18,
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2F65BD',
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/pay.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'roboto',
                  color: 'white',
                  marginTop: 10,
                  fontWeight: 'bold'
                }}>
                Pay
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/nearby.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'roboto',
                  color: 'white',
                  marginTop: 10,
                  fontWeight: 'bold'
                }}>
                Nearby
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/topup.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'roboto',
                  color: 'white',
                  marginTop: 10,
                  fontWeight: 'bold'
                }}>
                Top Up
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/more.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'roboto',
                  color: 'white',
                  marginTop: 10,
                  fontWeight: 'bold'
                }}>
                More
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* bagian bottom navigation */}
      <View
        style={{backgroundColor: 'white', height: 54, flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./icon/home-active.png')} />
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'roboto',
              color: 'green',
              marginTop: 4,
            }}>
            Home
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./icon/order.png')} />
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'roboto',
              color: '#545454',
              marginTop: 4,
            }}>
            Orders
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./icon/help.png')} />
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'roboto',
              color: '#545454',
              marginTop: 4,
            }}>
            Help
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./icon/inbox.png')} />
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'roboto',
              color: '#545454',
              marginTop: 4,
            }}>
            Inbox
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./icon/account.png')} />
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'roboto',
              color: '#545454',
              marginTop: 4,
            }}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
