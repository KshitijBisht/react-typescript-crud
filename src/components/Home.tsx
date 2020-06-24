import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

interface IState {
    customers: any[];
}

export default function Home(props:RouteComponentProps){
    // constructor(props: RouteComponentProps) {
    //     super(props);
    //     this.state = { customers: [] }
    // }

    const [customers,setCustomers] = React.useState<any[]>([])

    const fetchCustomers = function(){
        axios.get(`http://localhost:5000/customers`).then(data => setCustomers(data.data))
    }

    React.useEffect(() => {
        fetchCustomers();
       }, [])

       const deleteCustomer = function(id: number) {
        axios.delete(`http://localhost:5000/customers/${id}`).then(data => {
            const index = customers.findIndex(customer => customer.id === id);
            customers.splice(index, 1);
            props.history.push('/');
        })
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
                        <table className="table table-bordered">
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
                                        <td>{customer.name}</td>
                                        <td>{customer.description}</td>
                                        <td>{customer.updated_by}</td>
                                        <td>{customer.last_updated}</td>
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                    <Link to={`edit/${customer.id}`} className="btn btn-sm btn-outline-secondary">Edit Customer </Link>
                                                    <button className="btn btn-sm btn-outline-secondary" onClick={() => deleteCustomer(customer.id)}>Delete Customer</button>
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