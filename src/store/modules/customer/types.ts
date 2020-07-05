export interface Customer {
    id: number;
    name:string;
    updated_by:string;
    description: string;
    last_updated: string;
  }
  
  export interface CustomerState {
    data: Customer[];
  }
  
  export const CREATE_CUSTOMER_REQUEST = '@todo/CREATE_CUSTOMER_REQUEST';
  export const UPDATE_CUSTOMER_REQUEST = '@todo/UPDATE_CUSTOMER_REQUEST';
  export const DELETE_CUSTOMER_REQUEST = '@todo/DELETE_CUSTOMER_REQUEST';
  
  interface CreateTodoRequest {
    type: typeof CREATE_CUSTOMER_REQUEST;
    payload: { customer: Customer };
  }
  
  interface UpdateTodoRequest {
    type: typeof UPDATE_CUSTOMER_REQUEST;
    payload: { customer: Customer };
  }
  
  interface DeleteTodoRequest {
    type: typeof DELETE_CUSTOMER_REQUEST;
    payload: { customer: Customer };
  }
  
  export type CustomerActionsTypes =
    | CreateTodoRequest
    | UpdateTodoRequest
    | DeleteTodoRequest;
  