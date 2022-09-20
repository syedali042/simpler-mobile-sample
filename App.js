import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import TabViews from './components/Tabs';

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#A5A9E8" />
      <View style={styles.container}></View>
      <View style={styles.rides.header}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={styles.rides.userAvatar}
            source={require('./assets/images/avatar.png')}
          />
          <View>
            <Text style={styles.rides.welcomeText}>WELCOME</Text>
            <Text style={styles.rides.crewNameText}>Hank Schrader</Text>
          </View>
        </View>
        <View
          style={[{backgroundColor: '#E4E5F8', height: 55, borderRadius: 5}]}
        >
          <Text
            style={{
              textAlign: 'center',
              padding: 10,
              borderRadius: 3,
            }}
          >
            <Text style={styles.rides.dateBoxMonth}>SEP</Text>
            {`\n`}
            <Text>19th</Text>
          </Text>
        </View>
      </View>
      <TabViews />

      <View
        style={{
          position: 'static',
          bottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 70,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{
                transform: [{scale: 0.7}],
              }}
              source={require('./assets/images/routes-icon.png')}
            />
            <Text style={{fontSize: 12, left: -2}}> Routes</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 70,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{
                transform: [{scale: 0.7}],
              }}
              source={require('./assets/images/user-icon.png')}
            />
            <Text style={{fontSize: 12, color: '#71727A', left: -2}}>
              {' '}
              Profile
            </Text>
          </TouchableOpacity>
        </View>
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
      paddingLeft: 15,
      paddingRight: 15,
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: 130,
    },
    userAvatar: {
      width: 56,
      height: 56,
    },
    welcomeText: {
      // color: '#f44336',
      fontSize: 15,
      color: 'rgb(156, 158, 166)',
      left: 10,
      top: 4,
      fontWeight: '600',
    },
    crewNameText: {
      left: 10,
      top: 3,
      color: '#1F2024',
      fontWeight: '800',
      fontSize: 22,
    },
    dateBox: {
      backgroundColor: '#E4E5F8',
    },
    dateBoxMonth: {
      color: '#000000',
      fontWeight: '700',
    },
  },
});
