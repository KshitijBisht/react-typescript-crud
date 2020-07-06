import axios, { AxiosResponse } from 'axios';

export async function getCustomers(){
    return axios.get("http://localhost:5000/customers").then((res:any)=>res.json())
}

export async function postCustomers(customers:any[]){
    return axios.post("http://localhost:5000/customers",customers)
}