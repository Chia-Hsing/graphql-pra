import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import { query } from '../queries/fetchSongs'

class SongCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: '' }
    }

    onSubmit(e) {
        e.preventDefault()

        this.props
            .mutate({
                variables: {
                    title: this.state.title,
                },
                // 執行完 mutate 後會直接執行的 query，若這個 query 需要 variables，可放入 variables 參數。
                // 要執行的 query 不屬於這個 component 時。
                refetchQueries: [{ query /* variables */ }],
            })
            .then(() => hashHistory.push('/'))
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>create a new song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input onChange={(event) => this.setState({ title: event.target.value })} value={this.state.title} />
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            title
        }
    }
`

export default graphql(mutation)(SongCreate)
