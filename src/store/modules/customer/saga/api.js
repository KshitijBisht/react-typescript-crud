import axios from 'axios';

export async function getCustomers(){
    return axios.get("http://localhost:5000/customers").then(res=>res.json())
}

export async function postCustomers(customers){
    return axios.post("http://localhost:5000/customers",customers)
}