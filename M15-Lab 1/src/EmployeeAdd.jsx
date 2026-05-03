import React from 'react';

export default class EmployeeAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.employeeAdd;
        if (!form.employeeName.value.trim() || !form.extension.value.trim() || !form.email.value.trim() || !form.title.value.trim()) {
            alert('Please fill in all fields before adding an employee.');
            return;
        }
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
                    <button className="btn btn-primary" type="submit">Add</button>
                </form>
            </div>
        );
    }
}
