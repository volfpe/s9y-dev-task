import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { loadavg } from 'os';

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
            <Query query={usersQuery}>
                {({error, loading, data}) => {
                    if (error) {
                        return <div>Error fetching users</div>
                    }
                    if (loading) {
                        return <div>Loading</div>
                    }
                    return(
                        <>
                            {data.users.map(user => (
                                <div key={user.id}>
                                    <div>{user.username}</div>
                                </div>
                            ))}
                        </>
                    )
                }}
            </Query>
        )
    }
}