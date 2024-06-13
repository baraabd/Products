var { buildSchema } = require("graphql")

const schema = buildSchema(`
  type Query {
    listProducts: [Product]
  }

  type Product {
    id: ID
    name: String,
    description: String,
    price: Float,
    image: String
  }

  type Mutation {
    addProduct(name: String!, description: String!, price: Float!, image: String!): Product
  }
`)

module.exports = schema;