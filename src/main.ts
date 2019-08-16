import 'reflect-metadata'
import { CustomerResolver } from './resolvers/customer.resolver'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import mongoose from 'mongoose'
import { ObjectIdScalar } from './custom-scalars/objectId.scalar'
import { config } from './config'
const port = process.env.PORT || 8080;
async function bootstrap() {
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(config.dbURL, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }
  const schema = await buildSchema({
    resolvers: [CustomerResolver],
    container: Container,
    scalarsMap: [{ type: mongoose.Types.ObjectId, scalar: ObjectIdScalar }]
  })

  const server = new ApolloServer({
    schema,
    playground: true
  })

  // Start the server
  const { url } = await server.listen({port})
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
