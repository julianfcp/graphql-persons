import { ApolloServer, gql } from "apollo-server";

const persons = [
  {
    name: "Julian",
    phone: "444444",
    street: "Caney",
    city: "Cali",
    id: "1213212314234",
  },
  {
    name: "Natalia",
    phone: "444444",
    street: "Caney",
    city: "Cali",
    id: "1213212314234",
  },
  {
    name: "Laura",
    phone: "444444",
    street: "Caney",
    city: "Cali",
    id: "1213212314234",
  },
  {
    name: "Mateo",
    phone: "444444",
    street: "Caney",
    city: "Cali",
    id: "1213212314234",
  },
];

// Definicion de tipos de datos
const typeDefs = gql`
  type Person {
    name: String!
    phone: String
    street: String!
    city: String!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
  },
};

// Definicion del servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Inicializar servidor
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
