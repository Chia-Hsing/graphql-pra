import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const Root = () => {
    const client = new ApolloClient({})
    return (
        <ApolloProvider client={client}>
            <div>Lyrical</div>
        </ApolloProvider>
    )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
