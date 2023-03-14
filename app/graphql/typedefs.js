import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    "Get all the classes. if there are none, return an empty array"
    indexClasses: [Class]!
    indexSchools: [School!]!
    indexProfessors: [Professor!]!
    "Get a class by its id"
    class(_id: ID!): Class
  }

  type Mutation {
    "Create a new school"
    createSchool(name: String!, location: String!, studentCount: Int): School
    "Update a class building"
    updateClassBuilding(_id: ID!, newBuilding: String!): Class
  }

  type Class {
    "This is a mongodb ID, this is a class in the school"
    _id: ID!
    "The name of the class. Required"
    name: String!
    building: String!
    creditHours: Int!
    professors: Professor
  }

  type School {
    _id: ID!
    name: String!
    location: String!
    studentCount: Int!
    classes: [Class]
  }

  type Professor {
    _id: ID!
    name: String!
    studentScore: Float!
    officeHours: String!
    officeLocation: String!
  }
`;

export default typeDefs;
