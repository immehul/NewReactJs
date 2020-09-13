import React from 'react'

const UserList = props => (
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            { 
                props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => { props.editRow(user) }} className="button muted-button">Edit</button>
                                <button onClick = {() => props.deleteUser(user.id)} className="button muted-button">DELETE</button>
                            </td>
                        </tr>
                    ))
                ) : (
                <tr>
                  <td colSpan={4}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default UserList
