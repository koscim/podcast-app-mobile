import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, TextInput, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handleLoginPress = this.handleLoginPress.bind(this)
  }

  handlePasswordChange(text) {
    console.log(text)
    this.setState({ password: text })
  }

  handleUserNameChange(text) {
    console.log(text)
    this.setState({ username: text })
  }

  handleLoginPress() {
    this.props.handleLogin(this.state.username, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          testID={'username'}
          value={this.state.username}
          onChangeText={this.handleUserNameChange}
          style={{ backgroundColor: '#ededed', height: 20, width: 100, borderWidth: 1 }}
        />
        <TextInput
          testID={'password'}
          secureTextEntry
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          style={{ backgroundColor: '#ededed', height: 20, width: 100, borderWidth: 1 }}
        />
        <TouchableHighlight
          testID={'loginButton'}
          onPress={this.handleLoginPress}
        >
          <Text>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

App.propTypes = Object.assign({}, Component.propTypes, {
  handleLogin: PropTypes.func
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
