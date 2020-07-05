import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {RootState} from '../store/modules/combineReducers';
import { Customer } from '../store/modules/customer/types';
import {deleteCustomer} from '../store/modules/customer/actions'

export default function Home(props:RouteComponentProps){
    const dispatch = useDispatch();
    // const [customers,setCustomers] = React.useState<any[]>([])


    // const fetchCustomers = function(){
    //     axios.get(`http://localhost:5000/customers`).then(data => setCustomers(data.data))
    // }

    // React.useEffect(() => {
    //     fetchCustomers();
    //    }, [])

    const customers = useSelector((state: RootState) => state.customer.data);

       const handleDelete = function(customer:Customer,
        e: React.MouseEvent<HTMLSpanElement, MouseEvent>
        ): void {
            e.stopPropagation();
            const answer = window.confirm('Do you really want to delete this entry ?')
           if(answer){
               dispatch(deleteCustomer(customer))
        //     axios.delete(`http://localhost:5000/customers/${id}`).then(data => {
        //     const index = customers.findIndex(customer => customer.id === id);
        //     customers.splice(index, 1);
        //     props.history.push('/');
        // })

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
                                                <Link to={`edit/${customer.id}`}><i className ="fa fa-pencil" style={{marginRight: "10px"}}></i></Link>
                                                    <i className="fa fa-trash" id="delete-icon" onClick={(e): void => handleDelete(customer,e)} ></i>
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