import React, {useState, Fragment} from 'react'
import AddForm  from './forms/AddForm'
import EditForm  from './forms/EditForm'
import UserList  from './tables/UserList'

const First = () => {
	const userList = [
		{id : 1, firstname : 'Mehul', lastname : 'Padshala', email: 'mehulpadshala6@gmail.com' },
		{id : 2, firstname : 'Heena', lastname : 'Padshala', email: 'heenapadshala@gmail.com' },
		{id : 3, firstname : 'Hiya', lastname : 'Patel', email: 'hiya.patel@gmail.com' }
	]

	const intialData = { 
		id: null, 
		firstname: '', 
		lastname: '' ,
		email: ''
	}

	//setting state
	const [users, setUsers] = useState(userList)
	const [currentUser, setCurrentUser] = useState(intialData)
	const [editing, setEditing] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
		
		console.log(users);
	}

	const deleteUser = id => {
		setEditing(false);

		setUsers(users.filter(users => users.id !== id))
	}

	const updateUser = (id, updateUser) => {
		setUsers(users.map(user => (user.id === id ? updateUser : user)))
	}

	const editRow = user => {
		setEditing(false);

		setCurrentUser({
			id        : user.id,
			firstname : user.firstname,
			lastname  : user.lastname,
			email     : user.email,
		})
	}

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserList users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default First