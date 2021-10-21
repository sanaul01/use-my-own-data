import React, { useEffect, useRef, useState } from 'react';
import User from './Users/User';

const Home = () => {
    const [users, setUsers] = useState();
    const nameRef = useRef('');
    const emailRef = useRef('');

//========= my data is used hear ==============
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    //=========== handle submit form ===========
const handleSubmitForm = e =>{
    e.preventDefault()
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = {name: name, email: email};

// =============== data load start ===============

// =============== send data to server ============ 
    //  this fetch is different from normal fetch which is used by  fetch post.
    fetch('http://localhost:5000/users', {
        method: 'post',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        const addedUser = data;
        const newUser = [...users, addedUser];
        setUsers(newUser)
    });
    nameRef.current.value = '';
    emailRef.current.value= '';
};

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input type="text" ref={nameRef} placeholder="name"/>
                <input type="email" ref={emailRef} name="" id="" placeholder="email" required/>
                <input type="submit" value="submit"/>
            </form>

            <div>
            {
                users?.map(user=><User
                key={user.id}
                user={user}
                ></User>)
            }
            </div>
        </div>
    );
};

export default Home;