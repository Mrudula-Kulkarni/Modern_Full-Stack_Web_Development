import React from 'react';
import { Button } from 'react-bootstrap';

export default class EmployeeAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.employeeAdd;
        const employee = {
            name: form.employeeName.value,
            extension: form.extension.value,
            email: form.email.value,
            title: form.title.value,
            dateAdded: new Date().toDateString(),
            currentlyEmployed: true,
        };
        this.props.createEmployee(employee);
        form.employeeName.value = '';
        form.extension.value = '';
        form.email.value = '';
        form.title.value = '';
    }

    render() {
        return (
            <div>
                <form name="employeeAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="employeeName" placeholder="Name" style={{ marginRight: '10px' }} />
                    <input type="text" name="extension" placeholder="Extension" style={{ marginRight: '10px' }} />
                    <input type="text" name="email" placeholder="Email" style={{ marginRight: '10px' }} />
                    <input type="text" name="title" placeholder="Title" style={{ marginRight: '10px' }} />
                    <Button variant="primary" type="submit">Add</Button>
                </form>
            </div>
        );
    }
}
