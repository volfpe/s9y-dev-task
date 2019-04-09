import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Home from './pages/home'

const SERVER_IP = '192.168.88.245'
// const SERVER_IP = 'localhost'

const client = new ApolloClient({
    link: new HttpLink({
    uri: `http://${SERVER_IP}:1337/graphql`, // Server URL (must be absolute)
    credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache()
})

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ApolloProvider client={client}>
          <Home/>
        </ApolloProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
