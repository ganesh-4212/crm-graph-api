import { gql } from 'apollo-server';
import { CustomerService } from '../service';

const typeDefs = gql`
  type Customer {
    _id: ID
    name: String
    email: String
    phone: String
    address: String
    dateOfBirth: String
    profilePic: String
  }
  input CustomerInput {
    name: String
    email: String
    phone: String
    address: String
    dateOfBirth: String
    profilePic: String
  }
  extend type Query {
    customers: [Customer]
    customer(id: ID!): Customer
  }

  extend type Mutation {
    customer(customer: CustomerInput!): Customer
    updateCustomer(id: ID!, customer: CustomerInput): Customer
  }
`;

const resolvers = {
  Query: {
    customers: () => CustomerService.getAll(),
    customer: (_, { id }) => CustomerService.getById(id)
  },
  Mutation: {
    customer: (_, { customer }) => CustomerService.createCustomer(customer),
    updateCustomer: (_, { id, customer }) => CustomerService.updateCustomer(id, customer)
  }
};

export { typeDefs, resolvers };
