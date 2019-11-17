import React from 'react'



class Employee extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {

        return (
                <tr>
                <td  style={{width:"200px"}}>{this.props.person.id }</td>
                <td style={{width:"150px"}}>{this.props.person.name}</td>
                <td style={{width:"100px"}}>{this.props.person.age}</td>
                <td style={{width:"100px"}}>{this.props.person.isActive ? "Active" : "Inactive"}</td>
                <td style={{width:"100px"}}>{this.props.person.company}</td>
                <td style={{width:"200px"}}>{this.props.person.email}</td>
                </tr>
        );
    }
}

export default Employee;