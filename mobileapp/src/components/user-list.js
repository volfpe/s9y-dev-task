import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { View, Text, StyleSheet } from 'react-native'

const usersQuery = gql`
    query users {
        users {
            id
            username
        }
    }
`

export default class UserList extends Component {
    render() {
        return (
            <Query query={usersQuery} style={styles.container}>
                {({error, loading, data}) => {
                    if (error) {
                        return <Text>Error fetching users</Text>
                    }
                    if (loading) {
                        return <Text>Loading</Text>
                    }
                    return(
                        <>
                            <Text>Users:</Text>
                            {data.users.map(user => (
                                <View key={user.id}>
                                    <Text>{user.username}</Text>
                                </View>
                            ))}
                        </>
                    )
                }}
            </Query>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})