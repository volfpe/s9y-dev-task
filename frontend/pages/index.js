import React, { Component } from 'react'
import UserList from '../components/user-list'
import Link from 'next/link'

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        Users list:
        <UserList />
        <Link href="/about?id=5">
          <a>about</a>
        </Link>
      </div>
    )
  }
}