import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/local_storage';
import './User.css'

const User = (props) => {
    const { _id, picture, about, gender, isActive, name, phone, registered, email, company, balance, address, age, } = props.data;

    const handleAddUser = (id) => {
        addToDb(id);
    }

    const handleDeleUser = (id) => {
        deleteFromDb(id);
    }

    return (
        <div className='childDiv'>
            <div className='user-image'>
                <img src={picture ? picture : 'Avatar'} alt="avatar" />
            </div>
            <p>Resitered: {registered ? registered : 'Empty Data'}</p>
            <p>User_ID: {_id ? _id : 'Empty Data'}</p>
            <p>Name: {name ? name : 'Empty Data'}</p>
            <p>Gender: {gender ? gender : 'Empty Data'}</p>
            <p>Age: {age ? age : 'Empty Data'}</p>
            <p>Phone: {phone ? phone : 'Empty Data'}</p>
            <p>Email: {email ? email : 'Empty Data'}</p>
            <p>Company: {company ? company : 'Empty Data'}</p>
            <p>Balance: ${balance ? balance : 'Empty Data'}</p>
            <p>Address: {address ? address : 'Empty Data'}</p>
            <p>Active: {isActive ? 'isActive' : 'inActive'}</p>
            <p>About: {about.slice(0, 50) ? about.slice(0, 120) : 'Empty Data'}</p>
            <button onClick={() => { handleAddUser(_id) }}>Add User</button>
            <button onClick={() => { handleDeleUser(_id) }}>Add User</button>

        </div>
    );
};

export default User;