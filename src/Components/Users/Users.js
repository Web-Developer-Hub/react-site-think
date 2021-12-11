import React, { useEffect, useState } from 'react';
import { addArray } from '../../utilities/module_js/module';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const result = ['This', 'is', 'my', 'user', 'information', 'here...']
    const summation = addArray(result);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const URL = `./Fack-Data/data.json`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);


    return (
        <div>
            <h1 style={{ 'textAlign': 'center', 'color': 'green' }}>{summation} </h1>
            <div className='mainDiv'>
                {users.map((user) => <User data={user} key={user._id}></User>)}
            </div>
        </div>
    );
};

export default Users;