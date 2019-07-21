import { CustomerModel } from './../models/customer.model'

import { Service } from 'typedi'

@Service()
export class CustomerService {
  getById(id) {
    return CustomerModel.findById(id).exec()
  }
  getAll() {
    return CustomerModel.find().exec()
  }
  createCustomer(customerDoc) {
    return CustomerModel.create(customerDoc)
  }

  findByIds(ids: any[]) {
    return CustomerModel.find({
      _id: {
        $in: ids
      }
    }).exec()
  }

  updateCustomer(id, customerDoc) {
    return CustomerModel.findByIdAndUpdate(id, customerDoc, { new: true }).exec()
  }
}
