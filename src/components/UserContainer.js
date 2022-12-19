import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux';

function UserContainer () {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    if (userData.loading) return <h2>loading ....</h2>

    if (userData.error) return <h2>{userData.error}</h2>
    
    return (
        <div>
            <h2>User List</h2>
            <div>
                {userData.users.map((user) => ( 
                    <p>{user.userID}. {user.name} -- {user.email} -- {user.username}</p> 
                ))}
            </div>
        </div>
    )
}

export default UserContainer