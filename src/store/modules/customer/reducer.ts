import {
    CustomerState,
    CustomerActionsTypes,
    CREATE_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_REQUEST,
    SAVE_CUSTOMERS_REQUEST,
    LOAD_CUSTOMERS_REQUEST
  } from './types';

  const initialState: CustomerState = {
    data: [],
  };
  
  export default function todoReducer(
    state = initialState,
    action: CustomerActionsTypes
  ): any {
    switch (action.type) {
      case SAVE_CUSTOMERS_REQUEST:
        console.log(`State = = =${JSON.stringify(state)}`)
        console.log(`Action = = =${JSON.stringify(action)}`)
        return{
         data:[]
        };
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