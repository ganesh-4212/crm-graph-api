import { prop, Typegoose } from 'typegoose'
import { Types } from 'mongoose'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Customer extends Typegoose {
  @Field({nullable: true })
  id?: string

  @Field()
  @prop({ required: true })
  name: string

  @Field()
  @prop({ required: true })
  address: string

  @Field({ nullable: true })
  @prop({ required: false, index: true, unique: true })
  email?: string

  @Field()
  @prop({ required: true, index: true, unique: true })
  phone: string

  @Field({ nullable: true })
  @prop({ required: false, default: Date.now })
  dateOfBirth?: Date

  @Field({ nullable: true })
  @prop()
  profilePic?: string
}

export const CustomerModel = new Customer().getModelForClass(Customer)
