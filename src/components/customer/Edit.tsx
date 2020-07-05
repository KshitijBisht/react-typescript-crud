import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {updateCustomer} from '../../store/modules/customer/actions';
import {Customer} from '../../store/modules/customer/types'
import axios from 'axios';
import {RootState} from '../../store/modules/combineReducers'

export interface IValues {
    [key: string]: any;
}
export interface IFormState {
    id: number,
    customer: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

function EditCustomer(props:RouteComponentProps<any>) {
        const dispatch = useDispatch();
        const data = useSelector((state: RootState) => state.customer.data);
        const customer = useSelector((state: RootState) => state.customer.data[props.match.params.id]);
        const[id,setId] = React.useState<string>(props.match.params.id)
        // const[customer,setCustomer] = React.useState<any>(data)
        const [values,setValues] = React.useState<any[]>([])
        const [loading,setLoading] = React.useState<boolean>(false)
        const [submitSuccess,setSubmitSuccess] = React.useState<boolean>(false)
    
    // public componentDidMount(): void {
    //     axios.get(`http://localhost:5000/customers/${this.state.id}`).then(data => {
    //         this.setState({ customer: data.data });
    //     })
    // }

    // React.useEffect(() => {
    //     const customer = data.filter(item=>{
    //         return item.id === props.match.params.id
    //     })
    //     setCustomer(customer);

    //    }, [])

    const processFormSubmission =  (customer:Customer,e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);
        dispatch(updateCustomer({...customer,...values}));
        setLoading(false);
        setTimeout(() => {
            props.history.push('/');
        }, 1500);

        // axios.patch(`http://localhost:5000/customers/${id}`, values).then(data => {
        //     setSubmitSuccess(true);
        //     setLoading(false);
        //     setTimeout(() => {
        //         props.history.push('/');
        //     }, 1500)
        // })
    }

    const setValuess = (val: IValues) => {
        // this.setState({ values: { ...this.state.values, ...values } });

        setValues({...values, ...val})
    }
     const handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValuess({ [e.currentTarget.id]: e.currentTarget.value })
    }
       
        return (
            <div className="App">
                {customer &&
                    <div>
                        < h1 > Customer List Management App</h1>

                        <div>
                            <div className={"col-md-12 form-wrapper"}>
                                <h2> Edit Customer </h2>
                                {submitSuccess && (
                                    <div className="alert alert-info" role="alert">
                                        Customer's details has been edited successfully </div>
                                )}
                                <form id={"create-post-form"} onSubmit={(e): void=>processFormSubmission(customer,e)} noValidate={true}>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="name"> Name </label>
                                        <input type="text" id="name" defaultValue={customer.name} onChange={(e) => handleInputChanges(e)} name="name" className="form-control" placeholder="Enter name" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="updated_by"> Updated By </label>
                                        <input type="text" id="updated_by" defaultValue={customer.updated_by} onChange={(e) => handleInputChanges(e)} name="updated_by" className="form-control" placeholder="Updated By" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="last_updated"> Last Updated </label>
                                        <input type="date" id="last_updated" defaultValue={customer.last_updated} onChange={(e) => handleInputChanges(e)} name="last_updated" className="form-control" placeholder="Enter Date" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="description"> Description </label>
                                        <input type="text" id="description" defaultValue={customer.description} onChange={(e) => handleInputChanges(e)} name="description" className="form-control" placeholder="Enter Description" />
                                    </div>
                                    <div className="form-group col-md-4 pull-right">
                                        <button className="btn btn-success" type="submit">
                                            Edit Customer </button>
                                        {loading &&
                                            <span className="fa fa-circle-o-notch fa-spin" />
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    
}
export default withRouter(EditCustomer)