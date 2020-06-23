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

class Create extends React.Component<RouteComponentProps, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            name: '',
            updated_by:'',
            description: '',
            last_updated:'',
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }
    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {
            name: this.state.name,
            updated_by: this.state.updated_by,
            last_updated:this.state.last_updated,   
            description: this.state.description,
        }
        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
        axios.post(`http://localhost:5000/customers`, formData).then(data => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        ]);
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
    })
}
public render() {
    const { submitSuccess, loading } = this.state;
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
                <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                    <div className="form-group col-md-12">
                        <label htmlFor="name"> Name </label>
                        <input type="text" id="name" onChange={(e) => this.handleInputChanges(e)} name="name" className="form-control" placeholder="Enter name" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="description"> Description </label>
                        <input type="text" id="description" onChange={(e) => this.handleInputChanges(e)} name="description" className="form-control" placeholder="Enter Description" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="updated_by"> Updated By </label>
                        <input type="text" id="updated_by" onChange={(e) => this.handleInputChanges(e)} name="updated_by" className="form-control" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="last_updated"> Last Updated </label>
                        <input type="date" id="last_updated" onChange={(e) => this.handleInputChanges(e)} name="last_updated" className="form-control" placeholder="Enter Date" />
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

}
export default withRouter(Create)