import * as React from 'react';
import {Animated, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Constants from 'expo-constants';
import NewRoutes from './subcomponents/NewRoutes';
const FirstRoute = () => <NewRoutes />;
const SecondRoute = () => <></>;

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'New Routes'},
      {key: 'second', title: 'Completed'},
    ],
  };

  _handleIndexChange = (index) => this.setState({index});

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}
            >
              <Animated.Text
                style={{
                  opacity,
                  fontWeight: '700',
                  fontSize: 16,
                  backgroundColor: this.state.index == i ? '#fff' : 'none',
                  paddingTop: 10,
                  paddingRight: 30,
                  paddingBottom: 10,
                  paddingLeft: 30,
                  borderRadius: 5,
                }}
              >
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        style={{marginTop: -40}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -60,
  },
  tabBar: {
    flexDirection: 'row',
    // paddingTop: Constants.statusBarHeight,
    marginRight: 18,
    marginLeft: 18,
    marginBottom: 5,
    backgroundColor: '#F8F9FE',
    borderRadius: 10,
  },
  tabItem: {
    width: '50%',
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
});
