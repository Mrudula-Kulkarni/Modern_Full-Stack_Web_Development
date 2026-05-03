import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

function EmployeeRow(props) {
    const employee = props.employee;
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.extension}</td>
            <td>{employee.email}</td>
            <td>{employee.title}</td>
            <td>{employee.dateAdded}</td>
            <td>{employee.currentlyEmployed ? 'Yes' : 'No'}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => props.deleteEmployee(employee.id)}>X</button>
            </td>
        </tr>
    );
}

function EmployeeTable(props) {
    const employeeRows = props.employees.map(employee =>
        <EmployeeRow key={employee.id} employee={employee} deleteEmployee={props.deleteEmployee} />
    );
    return (
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Extension</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Date Added</th>
                    <th>Currently Employed?</th>
                    <th></th>
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
                { id: 1, name: 'Patti Patel', extension: 1114, email: 'patti@vectacorp.com', title: 'VP of Engineering', dateAdded: 'Fri Aug 26 2022', currentlyEmployed: true },
                { id: 2, name: 'Gertrude Giles', extension: 1113, email: 'gertrude@vectacorp.com', title: 'Software Engineer', dateAdded: 'Fri Aug 26 2022', currentlyEmployed: true },
                { id: 3, name: 'Zak Zakaria', extension: 1112, email: 'zak@vectacorp.com', title: 'Product Manager', dateAdded: 'Fri Aug 26 2022', currentlyEmployed: true },
                { id: 4, name: 'Suzi Suarez', extension: 1115, email: 'suzi@vectacorp.com', title: 'UX Designer', dateAdded: 'Fri Aug 26 2022', currentlyEmployed: true },
                { id: 5, name: 'Cody Coder', extension: 1110, email: 'cody@vectacorp.com', title: 'Systems Analyst', dateAdded: 'Fri Aug 26 2022', currentlyEmployed: true },
                { id: 6, name: 'Ammal Ahmad', extension: 1130, email: 'ammal@vectacorp.com', title: 'Quality Assurance', dateAdded: 'Fri Aug 26 2022', currentlyEmployed: true },
                { id: 7, name: 'Holly Holiday', extension: 5352, email: 'holly@vectacorp.com', title: 'Sales Manager', dateAdded: 'Wed Sep 07 2022', currentlyEmployed: true },
                { id: 8, name: 'Evan Evander', extension: 5433, email: 'evan@vectacorp.com', title: 'Software Engineer', dateAdded: 'Wed Sep 07 2022', currentlyEmployed: false },
                { id: 9, name: 'Mrudula Kulkarni', extension: 1001, email: 'mrudula@vectacorp.com', title: 'Software Engineer', dateAdded: 'Sat May 03 2026', currentlyEmployed: true },
            ],
        };
        this.createEmployee = this.createEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    createEmployee(employee) {
        employee.id = this.state.employees.length + 1;
        const newEmployeeList = this.state.employees.slice();
        newEmployeeList.push(employee);
        this.setState({ employees: newEmployeeList });
    }

    deleteEmployee(id) {
        const newEmployeeList = this.state.employees.filter(employee => employee.id !== id);
        this.setState({ employees: newEmployeeList });
    }

    render() {
        return (
            <div style={{ margin: '20px 40px' }}>
                <h2>Employees <span className="badge bg-secondary">{this.state.employees.length}</span></h2>
                <EmployeeFilter />
                <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                <EmployeeAdd createEmployee={this.createEmployee} />
            </div>
        );
    }
}
