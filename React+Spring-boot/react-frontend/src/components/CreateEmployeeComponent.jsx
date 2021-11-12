import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { name: this.state.name, email: this.state.email };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees')
        })
    }

    cancel() {
        this.props.history.push('/employees')
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Insert Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name </label>
                                        <input placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email </label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;