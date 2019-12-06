import { Module } from '@nestjs/common';
import { TypegooseModule } from "nestjs-typegoose";
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { Customer } from './models/customer';

@Module({
  imports: [TypegooseModule.forFeature([Customer])],
  providers: [CustomersService, CustomersResolver]
})
export class CustomersModule {}
