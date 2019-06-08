import { merge } from 'lodash';
import { makeExecutableSchema, gql } from 'apollo-server';
import { typeDefs as Customer, resolvers as customerResolvers } from './customer';

const Query = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = [Query, Customer];
const resolvers = merge({}, customerResolvers);

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
