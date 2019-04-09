import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
    global.fetch = fetch
}

const create = (initialState) => {
    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
        // ssrMode: true,
        link: new HttpLink({
        uri: 'http://localhost:1337/graphql', // Server URL (must be absolute)
        credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
        }),
        cache: new InMemoryCache().restore(initialState || {})
    })
}

export default (initialState) => {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return create(initialState)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState)
    }

    return apolloClient
}