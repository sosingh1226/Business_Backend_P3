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
            <div className="container02">
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
                /> <p></p>

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
                <p></p>
                {/* <table className="table table-primary table-striped"> */}
                <table className="table2">
                    <thead className="thead2">
                        <tr>
                            <th scope="col">PICTURE</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">PHONE NUMBER</th>
                            <th scope="col">ID REF</th>
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
