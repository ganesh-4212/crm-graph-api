import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypegooseModule } from 'nestjs-typegoose';
import { CustomersModule } from './customers/customers.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypegooseModule.forRoot(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    CustomersModule,
  ],
})
export class AppModule {}
