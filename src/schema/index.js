import { merge } from 'lodash';
import { makeExecutableSchema, gql } from 'apollo-server';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { typeDefs as Customer, resolvers as customerResolvers } from './customer';

const rootTypeDefs = gql`
  scalar JSON
  scalar JSONObject
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = [rootTypeDefs, Customer];
const resolvers = merge({ JSON: GraphQLJSON, JSONObject: GraphQLJSONObject }, customerResolvers);

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
