import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Customer } from './models/customer';
import { CustomersService } from './customers.service';
import { CustomerInput } from './dto/customer.input';

@Resolver(of => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}
  @Query(returns => Customer, { nullable: true })
  async customer(@Args('customerId') customerId: string): Promise<Customer> {
    return this.customersService.getById(customerId);
  }

  @Query(returns => [Customer])
  async customers(): Promise<Customer[]> {
    return this.customersService.getAll();
  }

  @Mutation(returns => Customer)
  async createCustomer(
    @Args('customer') customer: CustomerInput,
  ): Promise<Customer> {
    return this.customersService.saveOrUpdateCustomer(customer);
  }
}
