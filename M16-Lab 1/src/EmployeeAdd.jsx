import React from 'react';

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
            <div className="mt-3">
                <form name="employeeAdd" onSubmit={this.handleSubmit} className="form-inline">
                    <input type="text" name="employeeName" placeholder="Name" className="form-control mr-2 mb-2" />
                    <input type="text" name="extension" placeholder="Extension" className="form-control mr-2 mb-2" />
                    <input type="text" name="email" placeholder="Email" className="form-control mr-2 mb-2" />
                    <input type="text" name="title" placeholder="Title" className="form-control mr-2 mb-2" />
                    <button className="btn btn-primary mb-2">Add</button>
                </form>
            </div>
        );
    }
}
