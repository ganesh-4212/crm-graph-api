import { CustomerService } from './../service/customer.service'
import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { Customer } from '../models/customer.model'
import { CustomerInput } from '../schema/customer.input'

@Resolver(of => Customer)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}
  @Query(returns => Customer, { nullable: true })
  async customer(@Arg('customerId') customerId: string) {
    return this.customerService.getById(customerId)
  }

  @Query(returns => [Customer])
  async customers() {
    return this.customerService.getAll()
  }

  @Mutation(returns => Customer)
  async createCustomer(@Arg('customer') customer: CustomerInput) {
    return this.customerService.saveOrUpdateCustomer(customer)
  }
}
