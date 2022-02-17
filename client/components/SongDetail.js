import { extend } from 'lodash'
import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import { query } from '../queries/fetchSong'
import LyricCreate from '../components/LyricCreate'
import LyricList from './LyricList'

class SongDetail extends React.Component {
    render() {
        const { song } = this.props.data

        if (!song) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back</Link>
                <h5>{song.title}</h5>
                <LyricList lyrics={song.lyrics} />
                <LyricCreate songId={this.props.params.id} />
            </div>
        )
    }
}

export default graphql(query, {
    options: (props) => {
        return { variables: { id: props.params.id } }
    },
})(SongDetail)
