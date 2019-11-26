import React from 'react'
import Employee from './Employee'
import {Link} from "react-router-dom"


class ListPeople extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.setData();
    }

    setData = () => {
        fetch("http://localhost:3000/employees")
            .then(resp => {
                return resp.json();
            })
            .then(source => {
                console.log(source)
                this.setState({
                    dataSource: source,
                    isLoading: false
                });
            }
            );
    }


    reload = () => {
        this.setState({
            dataSource: [],
            isLoading: true
        })
        this.setData();
    }

    render() {
        return this.state.isLoading ?
            (<div>
                <h2>Employees List</h2>
                <p>Loading...</p>
            </div>
            )
            :
            (<div>
                <h2>Employees List</h2>
                <table>
                    <thead>
                        <tr>
                            <td style={{ width: "200px" }}>Id</td>
                            <td style={{ width: "150px" }}>Name</td>
                            <td style={{ width: "100px" }}>Age</td>
                            <td style={{ width: "100px" }}>IsActive</td>
                            <td style={{ width: "120px" }}>Company</td>
                            <td style={{ width: "120px" }}>Email</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.dataSource.map(p => {
                                return <Employee
                                    key={p.id}
                                    person={p}
                                    reload={this.reload}
                                />
                            })
                        }
                    </tbody>
                </table>
                <Link to="/new"><button>Create new</button></Link>
            </div>
            );
    }
}

export default ListPeople;