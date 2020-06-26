import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';


export default function Home(props:RouteComponentProps){

    const [customers,setCustomers] = React.useState<any[]>([])

    const fetchCustomers = function(){
        axios.get(`http://localhost:5000/customers`).then(data => setCustomers(data.data))
    }

    React.useEffect(() => {
        fetchCustomers();
       }, [])

       const deleteCustomer = function(id: number) {
            const answer = window.confirm('Do you really want to delete this entry ?')
           if(answer){
            axios.delete(`http://localhost:5000/customers/${id}`).then(data => {
            const index = customers.findIndex(customer => customer.id === id);
            customers.splice(index, 1);
            props.history.push('/');
        })
           }
           
    }
        return (
            <div>
                {customers.length === 0 && (
                    <div className="text-center">
                        <h2>No Users found at the moment</h2>
                    </div>
                )}
                <div className="container">
                    <div className="row">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Updated By</th>
                                    <th scope="col">Last Updated</th>
                                    <th scope="col">Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {customers && customers.map(customer =>
                                    <tr key={customer.id}>
                                        <td><Link to={`edit/${customer.id}`}>{customer.name}</Link></td>
                                        <td>{customer.description}</td>
                                        <td>{customer.updated_by}</td>
                                        <td>{customer.last_updated}</td>
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                <i className ="fa fa-pencil" style={{marginRight: "10px"}}><Link to={`edit/${customer.id}`}></Link></i>
                                                    <i className="fa fa-trash" onClick={() => deleteCustomer(customer.id)} ></i>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    
}