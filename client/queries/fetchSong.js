import gql from 'graphql-tag'

export const query = gql`
    query SongQuery($id: ID!) {
        song(id: $id) {
            title
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`
