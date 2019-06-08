import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';
import schema from './schema';
import config from './config';

mongoose.connect(config.dbURL, {
  useNewUrlParser: true
});

const server = new ApolloServer({ schema });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
