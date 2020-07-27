import axios from 'axios';

export async function getCustomers(){
    const res = await axios.get("http://localhost:5000/customers")
    return res;
}

export async function postCustomers(customers:any[]){
    return axios.post("http://localhost:5000/customers",customers)
}