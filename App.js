import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class App extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Home page',
    headerRight:<TouchableOpacity  onPress={()=>(props.navigation.navigate('Page2'))}><Text>Second page</Text></TouchableOpacity>
  });

  render() {
    return (
      <View style={{
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <TouchableOpacity onPress={()=>(this.props.navigation.navigate('Page2'))}>
          <Text>Go to page two</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Second extends React.Component {

  static navigationOptions = (props) => ({
    title: 'Second page',
    headerRight:<TouchableOpacity  onPress={()=>(props.navigation.navigate('Page3'))}><Text>Third page</Text></TouchableOpacity>
  })

  render(){
    return(
    <View style={{
      backgroundColor: 'blue',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>This is second page</Text>
    </View>
    );
  }
}

class Third extends React.Component {

  static navigationOptions = (props) => ({
    title: 'Third page'
   
  })

  render(){
    return(
    <View style={{
      backgroundColor: 'blue',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>This is second page</Text>
    </View>
    );
  }
}

const Navigator = StackNavigator({
  Home: {screen: App },
  Page2: {screen: Second},
  Page3: {screen: Third}
})

export default Navigator;