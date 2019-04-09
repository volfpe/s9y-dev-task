import React, { Component } from 'react'
import Link from 'next/link'

export default class About extends Component {
    static async getInitialProps({ query }) {
        return {
            id: query.id
        }
    }
    render() {
        return (
            <div>
                <div>About page, id {this.props.id}</div>
                <Link href="/">
                    <a>Homepage</a>
                </Link>
            </div>
        )
    }
}