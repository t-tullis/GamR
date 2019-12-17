const { gql } = require("apollo-server-express");

const typeDefs = gql`
    #Types
    type Post {
        _id: String
        post: String
        author: String
    }
    
    #Queries
    type Query {
        getPost(_id: String): Post
        getPosts: [Post]
    }

    #Mutations
    type Mutation{
        createPost(post: String, author: String): Post
        deletePost(_id: String): Post
        updatePost(_id: String!, post: String!): Post
    }
`

module.exports = typeDefs