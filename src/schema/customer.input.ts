import { Customer } from '../models/customer.model'
import { Field, InputType } from 'type-graphql'

@InputType()
export class CustomerInput implements Partial<Customer> {
  @Field()
  name: string

  @Field()
  address: string

  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  phone?: string

  @Field({ nullable: true })
  dateOfBirth?: Date

  @Field({ nullable: true })
  profilePic?: string
}
