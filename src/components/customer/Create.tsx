import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IValues {
    name: string,
    updated_by: string,
    description: string,
    last_updated: string
}
export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

function Create(props:RouteComponentProps){

    const [name,setName] = React.useState<string>('')
    const [updated_by,setUpdatedBy] = React.useState<string>('')
    const [description,setDescription] = React.useState<string>('')
    const [last_updated,setLastUpdated] = React.useState<string>('')
    const [values,setValues] = React.useState<any[]>([])
    const [loading,setloading] = React.useState<boolean>(false)
    const [submitSuccess,setsubmitSuccess] = React.useState<boolean>(false)

    
     const processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setloading(true);
        const formData = {
            name: name,
            updated_by: updated_by,
            last_updated:last_updated,   
            description: description,
        }
        setsubmitSuccess(true);
        const latestValues = [...values,formData]
        setValues(latestValues);
        setloading(false)
        axios.post(`http://localhost:5000/customers`, formData).then(data => [
            setTimeout(() => {
                props.history.push('/');
            }, 1500)
        ]);
    }

//     const handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         console.log(`${JSON.parse(e.currentTarget.name)}`)
//         console.log(`${JSON.parse(e.currentTarget.value)}`)

        
//     //     this.setState({
//     //         [e.currentTarget.name]: e.currentTarget.value,
//     // })
// }
//     // const { submitSuccess, loading } = state;
    return (
        <div>
            <div className={"col-md-12 form-wrapper"}>
                <h2> Create Entry </h2>
                {!submitSuccess && (
                    <div className="alert alert-info" role="alert">
                        Fill the form below to create a new entry
                </div>
                )}
                {submitSuccess && (
                    <div className="alert alert-info" role="alert">
                        The form was successfully submitted!
                        </div>
                )}
                <form id={"create-post-form"} onSubmit={processFormSubmission} noValidate={true}>
                    <div className="form-group col-md-12">
                        <label htmlFor="name"> Name </label>
                        <input type="text" id="name" onChange={(e) => setName(e.currentTarget.value)} name="name" className="form-control" placeholder="Enter name" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="description"> Description </label>
                        <input type="text" id="description" onChange={(e) => setDescription(e.currentTarget.value)} name="description" className="form-control" placeholder="Enter Description" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="updated_by"> Updated By </label>
                        <input type="text" id="updated_by" onChange={(e) => setUpdatedBy(e.currentTarget.value)} name="updated_by" className="form-control" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="last_updated"> Last Updated </label>
                        <input type="date" id="last_updated" onChange={(e) => setLastUpdated(e.currentTarget.value)} name="last_updated" className="form-control" placeholder="Enter Date" />
                    </div>
                    <div className="form-group col-md-4 pull-right">
                        <button className="btn btn-success" type="submit">
                            Create Entry
                        </button>
                        {loading &&
                            <span className="fa fa-circle-o-notch fa-spin" />
                        }
                    </div>
                </form>
            </div>
        </div>
    )


}
export default withRouter(Create)