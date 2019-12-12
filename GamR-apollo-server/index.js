const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')

const app = express()
const port = process.env.PORT || 5000

//Creates type definitions 
const typeDefs = gql`
    type Query {
        hello: String
    }
`
//Creates Resolvers 
//You can think of resolvers as controllers
const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
}

//Creates Apollo Server
const server = new ApolloServer({typeDefs, resolvers})

//use a middleware function from the Apollo Server Express library to instantiate the GraphQL API.
server.applyMiddleware({ app })

//Have app listen to port 5000 locally.
app.listen(port, () =>
	console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`))

