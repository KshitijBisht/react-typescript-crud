import {CustomerActionsTypes,Customer,CREATE_CUSTOMER_REQUEST,UPDATE_CUSTOMER_REQUEST,DELETE_CUSTOMER_REQUEST} from './types';

export function createCustomer(customer: Customer): CustomerActionsTypes {
    return {
      type: CREATE_CUSTOMER_REQUEST,
      payload: { customer },
    };
  }
  
  export function updateCustomer(customer: Customer): CustomerActionsTypes {
    return {
      type: UPDATE_CUSTOMER_REQUEST,
      payload: { customer },
    };
  }
  
  export function deleteCustomer(customer: Customer): CustomerActionsTypes {
    return {
      type: DELETE_CUSTOMER_REQUEST,
      payload: { customer },
    };
  }
