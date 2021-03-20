import React, { Component } from 'react';

export default class Table extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        classBtnVal: { name: 'none', email: 'none', cell: 'none', id: 'none' },
        searchName: '',
        employees: this.props.employees.results
    };

    render() {
        const { classBtnVal, searchName, employees } = this.state;
        // const { data } = this.props;

        return (
            <div className="container">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Filter by Last Name"
                    onChange={(e) => {
                        this.setState({ searchName: e.target.value });
                        this.setState({
                            employees: employees.filter((employee) => {
                                return employee.name.last.toLowerCase().includes(searchName.toLowerCase());
                            })
                        });
                    }}
                />

                <input
                    type="text"
                    class="form-control"
                    placeholder="Filter by ID"
                    onChange={(e) => {
                        this.setState({ searchName: e.target.value });
                        this.setState({
                            employees: employees.filter((employee) => {
                                return employee.id;
                            })
                        });
                    }}
                />

                <table className="table table-primary table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cell</th>
                            <th scope="col">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr className="table-row" key={employee.login.uuid}>
                                <td>
                                    <img src={employee.picture.medium} alt="employee photo" />
                                </td>
                                <td>
                                    {employee.name.first} {employee.name.last}
                                </td>
                                <td>{employee.email}</td>
                                <td>{employee.cell}</td>
                                <td>{employee.id.name} {employee.id.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
