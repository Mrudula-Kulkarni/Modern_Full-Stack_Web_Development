import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

function EmployeeRow(props) {
    const employee = props.employee;
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.title}</td>
        </tr>
    );
}

function EmployeeTable(props) {
    const employeeRows = props.employees.map(employee =>
        <EmployeeRow key={employee.id} employee={employee} />
    );
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ textAlign: 'left', width: '200px', paddingRight: '40px' }}>Name</th>
                    <th style={{ textAlign: 'left', width: '200px' }}>Title</th>
                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    );
}

export default class EmployeeList extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: [
                { id: 1, name: 'Alice Smith', title: 'Engineer' },
                { id: 2, name: 'Bob Jones', title: 'Manager' },
                { id: 3, name: 'Carol White', title: 'Designer' },
                { id: 4, name: 'Mrudula Kulkarni', title: 'Developer' },
            ],
        };
        this.createEmployee = this.createEmployee.bind(this);
    }

    createEmployee(employee) {
        employee.id = this.state.employees.length + 1;
        const newEmployeeList = this.state.employees.slice();
        newEmployeeList.push(employee);
        this.setState({ employees: newEmployeeList });
    }

    render() {
        return (
            <div>
                <h1>Employee Tracker</h1>
                <EmployeeFilter />
                <EmployeeTable employees={this.state.employees} />
                <EmployeeAdd createEmployee={this.createEmployee} />
            </div>
        );
    }
}
