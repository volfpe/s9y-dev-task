import React, { Component } from 'react'
import UserList from '../components/user-list'

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        Users list:
        <UserList />
      </div>
    )
  }
}