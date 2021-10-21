import React from 'react';

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div>
            <h2>Id: {id}</h2>
            <h2>Name: {name}</h2>
            <h3>email: {email}</h3>
            <p>Phone No: {phone}</p>
        </div>
    );
};

export default User;