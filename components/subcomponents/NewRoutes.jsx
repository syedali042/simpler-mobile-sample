import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

export default function NewRoutes() {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 20,
          paddingLeft: 40,
          paddingRight: 40,
          paddingBottom: 20,
        }}
      >
        <View>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#9597A0'}}>
            PARTNER
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
            }}
          >
            <Image
              style={{width: 30, height: 30, borderRadius: 15, top: -5}}
              source={require('../../assets/images/avatar.png')}
            />
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>
                Jesse Pinkman
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  top: -4,
                }}
              >
                <Image
                  style={{width: 12, height: 14, top: -2}}
                  source={require('../../assets/images/phone.png')}
                />
                <Text
                  style={{
                    color: '#80828D',
                    fontSize: 14,
                    fontWeight: 'light',
                    left: 3,
                    top: -4,
                  }}
                >
                  202-555-0111
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{fontSize: 12, fontWeight: '700', color: '#9597A0'}}>
            TECH
          </Text>
          <View style={{paddingTop: 10}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../assets/images/first-aid-bag.png')}
            />
          </View>
          <View>
            <Text style={{fontWeight: '700', fontSize: 16, paddingTop: 5}}>
              #432
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <View>
          <Text style={{fontWeight: '400', color: '#2b2f41', fontSize: 16}}>
            3 Routes
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: '400', color: '#9597A0', fontSize: 16}}>
            8:00 AM - 4:00 PM
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity
          style={{
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: '#F8F9FE',
            width: '100%',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: '700'}}>8:00 AM</Text>
              <Image
                style={{
                  borderRadius: 17.5,
                  transform: [{scale: 0.4}],
                  left: -30,
                }}
                source={require('../../assets/images/arrow-right.png')}
              />
              <Text style={{left: -60, fontWeight: '700'}}>9:30 AM</Text>
            </View>
            <Text style={{color: '#80828D', fontSize: 14, paddingTop: 8}}>
              Subtitle
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderRadius: 17.5,
                transform: [{scale: 0.3}],
                left: 10,
              }}
              source={require('../../assets/images/arrow-right-small.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: '#F8F9FE',
            width: '100%',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: '700'}}>8:00 AM</Text>
              <Image
                style={{
                  borderRadius: 17.5,
                  transform: [{scale: 0.4}],
                  left: -30,
                }}
                source={require('../../assets/images/arrow-right.png')}
              />
              <Text style={{left: -60, fontWeight: '700'}}>9:30 AM</Text>
            </View>
            <Text style={{color: '#80828D', fontSize: 14, paddingTop: 8}}>
              Subtitle
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderRadius: 17.5,
                transform: [{scale: 0.3}],
                left: 10,
              }}
              source={require('../../assets/images/arrow-right-small.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: '#F8F9FE',
            width: '100%',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: '700'}}>8:00 AM</Text>
              <Image
                style={{
                  borderRadius: 17.5,
                  transform: [{scale: 0.4}],
                  left: -30,
                }}
                source={require('../../assets/images/arrow-right.png')}
              />
              <Text style={{left: -60, fontWeight: '700'}}>9:30 AM</Text>
            </View>
            <Text style={{color: '#80828D', fontSize: 14, paddingTop: 8}}>
              Subtitle
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderRadius: 17.5,
                transform: [{scale: 0.3}],
                left: 10,
              }}
              source={require('../../assets/images/arrow-right-small.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    // backgroundColor: '#fff',
  },
  rides: {
    header: {
      paddingTop: 15,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
});
