import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tb_employee: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    viewEmployee(id){
        this.props.history.push(`view-employee/${id}`)
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({tb_employee: this.state.tb_employee.filter(employee => employee.id !== id)});
        });
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) => {
            this.setState({tb_employee: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/insert-employee')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                
                <div className="row">
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.tb_employee.map(
                                    tb_employee =>
                                        <tr kew={tb_employee.id}>
                                            <td> {tb_employee.name} </td>
                                            <td> {tb_employee.email} </td>
                                            <td> 
                                                <button onClick = {() => this.editEmployee(tb_employee.id)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft:"10px"}} onClick = {() => this.deleteEmployee(tb_employee.id)} className="btn btn-danger">Delete</button>
                                                <button style={{marginLeft:"10px"}} onClick = {() => this.viewEmployee(tb_employee.id)} className="btn btn-success">View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <button style={{marginLeft:"-12px"}} className="btn btn-primary" onClick={this.addEmployee}> Create Employee</button>
            </div>
        );
    }
}

export default ListEmployeeComponent;

