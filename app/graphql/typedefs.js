import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    "Get all the classes. if there are none, return an empty array"
    indexClasses: [Class]!
  }

  type Class {
    "This is a mongodb ID, this is a class in the school"
    _id: id!
    "The name of the class. Required"
    name: String!
    building: String!
    creditHours: Int!
  }
`;

export default typeDefs;
