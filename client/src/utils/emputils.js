import React, { Component } from 'react';

export default class Emputils extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        classBtnVal: { name: 'none', email: 'none', cell: 'none', id: 'none', username: 'none', password: 'none', dob: 'none' },
        searchName: '',
        employees: this.props.employees.results
    };

    render() {
        const {employees } = this.state;

        return (
            <div className="container02">
                <table className="table3">
                    <thead className="thead2">
                        <tr>
                            <th scope="col">PICTURE</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">PHONE NUMBER</th>
                            <th scope="col">ID REF</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col">PASSWORD</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr className="table-row" key={employee.login.uuid}>
                                <td>
                                    <img src={employee.picture.large} alt="employee photo" />
                                </td>
                                <td>{employee.email}</td>
                                <td>{employee.cell}</td>
                                <td>{employee.id.name} {employee.id.value}</td>
                                <td>{employee.login.username}</td>
                                <td>{employee.login.password}</td>
                                <td>{employee.dob.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}