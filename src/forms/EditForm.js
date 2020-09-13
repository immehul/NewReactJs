import React, { useState, useEffect } from 'react'

/*
	Author : MP
	Date : 13/09/2020
	Purpose : This file is used to create edit related function.
*/
const EditForm = props => {
	
	const [user, setUser ] = useState(props.currentUser)

	useEffect(() => {
			setUser(props.currentUser)
		},
		[ props ]
	)

	const handleInputChange = event => {
		const {name, value } = event.target
		setUser({...user, [name] : value })
	}

	return (
	    <form
	      	onSubmit={event => {
	        	event.preventDefault()
	        	props.updateUser(user.id, user)
	      	}}
	    >
	      	<label>First Name</label>
	      	<input type="text" name="firstname" value={user.firstname} onChange={handleInputChange} />
	      	<label>Last Name</label>
	      	<input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} />
	      	<label>Email</label>
	      	<input type="text" name="email" value={user.email} onChange={handleInputChange} />
	      	<button>Update</button>
	      	<button onClick={() => props.setEditing(false)} className="button muted-button">
	        	Cancel
	      	</button>
	    </form>
	)
}

export default EditForm