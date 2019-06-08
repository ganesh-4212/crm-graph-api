/**
 * @module customerService
 */

import { Customer } from '../models';

/**
 * A customer
 * @typedef {Object} Customer
 * @property {string} name - Customer name
 * @property {string} email - Customer email
 * @property {string} phone - Customer phone
 * @property {string} address - Customer address
 * @property {Date} dateOfBirth - Customer date of birth
 * @property {string} profilePic - Customer profile pic
 */

/**
 * Get Customer by ID
 * @param {String} id - Id of the Customer
 * @returns {Promise<Customer>} - promise to Customer
 */
export function getById(id) {
  return Customer.findById(id).exec();
}

/**
 * Get all Customers.
 * @returns {Promise<Customer[]>} Promise to Customer list
 */
export function getAll() {
  return Customer.find().exec();
}

/**
 * Create customer
 * @param {Customer} customerDoc - Customer object
 * @returns {Promise<Customer>} - Promise to updated customer
 */
export function createCustomer(customerDoc) {
  return Customer.create(customerDoc);
}

/**
 * Get list of customers by list of ids
 * @param {string[]} ids - List of customer ids
 * @returns {Promise<Customer[]>} - Promise to list of customers.
 */
export function findByIds(ids) {
  return Customer.find({
    _id: {
      $in: ids
    }
  }).exec();
}
/**
 *
 * @param {string} id - ID of the customer
 * @param {Customer} customerDoc - Updated customer doc
 * @returns {Promise<Customer[]>} - updated customer
 */
export function updateCustomer(id, customerDoc) {
  return Customer.findByIdAndUpdate(id, customerDoc, { new: true }).exec();
}
