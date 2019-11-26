import React from 'react'


class EmployeeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 20,
            isActive: true,
            company: "",
            email: "",
            loading: false
        }
    }

    createNewEmoplyee = () => {
        this.setState({
            loading: true
        })
        const employee = {
            name: this.state.name,
            age: this.state.age,
            isActive: this.state.isActive,
            company: this.state.company,
            email: this.state.email
        }

        fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(response => {
                response.json();
                this.props.returnToList();
            })
    }

    render() {
        if(this.state.loading){
            return (
                <label>Saving...</label>
            )
        }
        return (
            <div>
                <p>Name
                <input onChange={(e) => { this.setState({ name: e.target.value }) }} />
                </p>
                <p>Age
                <input defaultValue={this.state.age} type="number" onChange={(e) => { this.setState({ age: e.target.value }) }} />
                </p>
                <p>Active
                <input defaultChecked={this.state.isActive} type="checkbox" onChange={(e) => { this.setState({ isActive: e.target.checked }) }} />
                </p>
                <p>Company
                <input onChange={(e) => { this.setState({ company: e.target.value }) }} />
                </p>
                <p>Email
                <input onChange={(e) => { this.setState({ email: e.target.value }) }} />
                </p>
                {/* <button onClick={this.props.returnToList} >Cancel</button> */}
                <button onClick={this.createNewEmoplyee} >Add employee</button>

            </div>
        );
    }
}

export default EmployeeForm;