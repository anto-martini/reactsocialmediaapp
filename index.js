const { ApolloServer, PubSub } = require('apollo-server');
const gql = require('graphql-tag');

const pubsub = new PubSub();

const typeDefs = require('./graphql/typeDefs');

const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
})

server.listen({ port: 5000 }).then((res) => {
    console.log(`Server is running at ${res.url}`);
});;


const mongoose = require('mongoose');
const { MONGODB } = require('./config');

async function conectar() {
    try {
        await mongoose.connect(MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("Conectado a BD metodo: Mongoodb Atlas - async-await");
    } catch (e) {
        console.log(e);
    }
};

conectar();