import React, { Component} from 'react'
import Axios from 'axios'


class Form extends Component{
	constructor(props) {
		super(props)

		this.state = {
			ename: '',
			address: '',
			dob: '',
			join_date: '',
			department: '',
            prev_exp: '',
            salary: '',
			empcode: '',
			gender: '',
		
		}
	}

	handleEmpcodeChange = event => {
		const re = /^[0-9a-zA-Z\b]+$/;
          if (event.target.value === '' || re.test(event.target.value)) {
             this.setState({
				 empcode: event.target.value
				})
          }
	}

	handleNameChange = event => {
		this.setState({
			ename: event.target.value
		})
	}

	handleAddressChange = event => {
		this.setState({
			address: event.target.value
		})
	}

	handleDepartmentChange = event => {
		this.setState({
			department: event.target.value
		})
	}

    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        })
    }

    handlePrevChange = event => {
        const re = /^[0-9\b]+$/;
          if (event.target.value === '' || re.test(event.target.value)) {
             this.setState({
				 prev_exp: event.target.value
				})
          }
      }

      handleSalaryChange = event => {
        const re = /^[0-9\b]+$/;
          if (event.target.value === '' || re.test(event.target.value)) {
             this.setState({salary: event.target.value})
          }
      }

	
	

	handleJoinChange = event => {
	   this.setState({
		   join_date: event.target.value
	   })
	}

	handleDobChange = event =>{
		this.setState({
			dob: event.target.value
		})
	}

	




	render() {
		const { ename, address, department, gender, prev_exp, salary, empcode, join_date, dob} = this.state
		
		


		const handleSubmitButton = () => {
			Axios.post('http://localhost:3001/api/insert', {
				 empcode: empcode, 
				 ename: ename,
				 department: department,
				 gender: gender,
				 dob: dob,
				 join_date: join_date,
				 prev_exp: prev_exp,
				salary: salary,
				address: address
			}).then(() => {
				alert("successful");
			});
		}

		

		return (
			<div className='form'>
			<form onSubmit={this.handleSubmit}>
                <div><h1>Add Employee</h1></div>

				<div>
					<label>Emp Code :</label>
					<input
						type="text" value={empcode} onChange={this.handleEmpcodeChange} required />
				</div>

				<div>
					<label>Name :</label>
					<input type="text" value={ename} onChange={this.handleNameChange} required />
				</div>
				
				<div>
					<label>Department :</label>
					<select value={department} onChange={this.handleDepartmentChange} required>
                    
                        <option value="" disabled selected hidden>Select one Department...</option>
						<option value="admin">Admin</option>
						<option value="accounts">Accounts</option>
						<option value="techology">Technology</option>
					</select>
				</div>
                

                <div className='gender' required>
                    <label>Gender :</label>
					
                    <label>Male
                    <input type="radio" value="Male" checked={gender === "Male"} onChange={this.handleGenderChange}/>
                    </label>
					
					
                    <label>Female
                    <input type="radio" value="Female" checked={gender === "Female"} onChange={this.handleGenderChange}/>
                    </label>
					
                </div>

                <div>
                    <label>Date of Birth : <input type = "date" value={dob} onChange={this.handleDobChange} required /></label>
                </div>

                <div>
                    <label>Joining Date : <input type = "date" value={join_date} onChange={this.handleJoinChange} required/></label>
                </div>

                <div>
                <label>Previous Experience :<input type="text" value={prev_exp} onChange={this.handlePrevChange} required/></label>
                </div>

                <div>
                <label>Salary :<input type="text" value={salary} onChange={this.handleSalaryChange} /></label>
                </div>

                <div>
					<label>Address : </label>
					<textarea rows="4" cols="50" value={address} onChange={this.handleAddressChange} required/>
				</div>

       

				<button type="submit" onClick={handleSubmitButton}>Submit</button>

			
			</form>
			</div>
		)
	}
}

export default Form