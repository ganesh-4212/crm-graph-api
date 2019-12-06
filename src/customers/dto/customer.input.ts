import { Field, InputType } from 'type-graphql';
import { Customer } from '../models/customer';

@InputType()
export class CustomerInput implements Partial<Customer> {
  @Field({ nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  dateOfBirth?: Date;

  @Field({ nullable: true })
  profilePic?: string;
}
