import {
    CustomerState,
    CustomerActionsTypes,
    CREATE_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_REQUEST,
  } from './types';

  const initialState: CustomerState = {
    data: [],
  };
  
  export default function todoReducer(
    state = initialState,
    action: CustomerActionsTypes
  ): CustomerState {
    switch (action.type) {
      case CREATE_CUSTOMER_REQUEST:
        return {
          data: [...state.data, action.payload.customer],
        };
      case UPDATE_CUSTOMER_REQUEST: {
        const data = state.data.map(customer =>
          customer.id === action.payload.customer.id ? action.payload.customer : customer
        );
  
        return { data };
      }
      case DELETE_CUSTOMER_REQUEST: {
        const data = state.data.filter(
          customer => customer.id !== action.payload.customer.id
        );
  
        return { data };
      }
      default:
        return state;
    }
  }