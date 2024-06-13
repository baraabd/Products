const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const app = express()
const { graphqlHTTP} = require('express-graphql')
const productSchema = require('./schema/schema')
const productResolver = require('./resolvers/resolvers')
const cors = require('cors');


mongoose.connect('mongodb+srv://<UserName>:<Password>@product-app.d8fglic.mongodb.net/?retryWrites=true&w=majority&appName=product-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  serverSelectionTimeoutMS: 10000, 

}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.use(cors())  
app.use('/graphql', graphqlHTTP({
    schema: productSchema,
    rootValue: productResolver,
    graphiql: true
    }))


app.get('/hi', (req,res) => {
    res.send('hello world')
})

app.listen('4000', () => {
    console.log('Server on port 4000')
})
