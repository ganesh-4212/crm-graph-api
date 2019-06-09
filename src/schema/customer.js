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
    id: ID
    name: String
    email: String
    phone: String!
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
  }
`;

const resolvers = {
  Query: {
    customers: () => CustomerService.getAll(),
    customer: (_, { id }) => CustomerService.getById(id)
  },
  Mutation: {
    customer(_, { customer }) {
      if (customer && customer.id && customer.id.length > 0) {
        return CustomerService.updateCustomer(customer.id, customer);
      }
      return CustomerService.createCustomer(customer);
    }
  }
};

export { typeDefs, resolvers };
