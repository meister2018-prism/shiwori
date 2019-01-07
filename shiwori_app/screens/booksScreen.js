import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class BooksScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Books Screen</Text>
        <Button
          title="book1"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="book2"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
export default BooksScreen;