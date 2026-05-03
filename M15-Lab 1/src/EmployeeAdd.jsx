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
            title: form.title.value,
        };
        this.props.createEmployee(employee);
        form.employeeName.value = '';
        form.title.value = '';
    }

    render() {
        return (
            <div>
                <form name="employeeAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="employeeName" placeholder="Name" style={{ marginRight: '10px' }} />
                    <input type="text" name="title" placeholder="Title" style={{ marginRight: '10px' }} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
