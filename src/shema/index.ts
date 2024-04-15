export const typeDefs = `#graphql
  tyep Country {
    id: ID!,
    code: String!,
    name: String!,
    emojy: String!,
  }


  type Query {
    countries: [Country]
  }
`