import React, { useState } from 'react'

const AddForm = props => {
	const intialFormState = {
		id : null, 
		firstname : '',
		lastname : '',
		email : ''
	}
	const [user, setUser] = useState(intialFormState)

	const handleChangeEvent = event => {
		const { name, value } = event.target

		setUser({...user, [name]: value })
	}

	return (
		<form  
			onSubmit = {event  => { 
				event.preventDefault()
				if(!user.firstname || !user.lastname || !user.email) return 
			  
			  		props.addUser(user)
			  		setUser(intialFormState)	
				}} >

				<label>First Name</label>
				<input type="text" name="firstname" value={user.firstname} onChange={handleChangeEvent} />
				<label>Last Name</label>
				<input type="text" name="lastname" value={user.lastname} onChange={handleChangeEvent} />
				<label>Email</label>
				<input type="text" name="email" value={user.email} onChange={handleChangeEvent} />
				<button>Add</button>
		</form>
	)
}

export default AddForm
