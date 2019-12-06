import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Customer } from './models/customer';
import { ReturnModelType } from '@typegoose/typegoose';
import { CustomerInput } from './dto/customer.input';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: ReturnModelType<typeof Customer>,
  ) {}

  getById(id): Promise<Customer> {
    return this.customerModel.findById(id).exec();
  }
  getAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }
  createCustomer(customerDoc): Promise<Customer> {
    return this.customerModel.create(customerDoc);
  }

  saveOrUpdateCustomer(customerDoc: CustomerInput): Promise<Customer> {
    if (customerDoc.id) {
      return this.updateCustomer(customerDoc.id, customerDoc);
    } else {
      return this.createCustomer(customerDoc);
    }
  }

  findByIds(ids: any[]) {
    return this.customerModel
      .find({
        _id: {
          $in: ids,
        },
      })
      .exec();
  }

  updateCustomer(id, customerDoc): Promise<Customer> {
    return this.customerModel
      .findByIdAndUpdate(id, customerDoc, {
        new: true,
      })
      .exec();
  }
}
