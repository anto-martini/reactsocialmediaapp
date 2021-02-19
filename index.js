const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');


const typeDefs = require('./graphql/typeDefs');

const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({ port: 5000 }).then((res) => {
    console.log(`Server is running at ${res.url}`);
});;


const mongoose = require('mongoose');
const uri = 'mongodb+srv://admin:7lhfqHTiWlZnNiRp@cluster0.uzm9f.mongodb.net/socialmediaapp?retryWrites=true'

async function conectar() {
    try {
        await mongoose.connect(uri, {
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