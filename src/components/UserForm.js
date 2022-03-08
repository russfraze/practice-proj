import { useState } from 'react';
import Button from './Button'

const UserForm = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const userData = {
            name: name, 
            age: age,
        }

        props.onSaveUser(userData)

    }

    return (
        <form onSubmit={submitHandler}>
            <label>Enter Username
                <input onChange={nameHandler}></input>
            </label>
            <label>Age
                <input onChange={ageHandler}></input>
            </label>
            <Button type='submit'/>
        </form>
    )
}


export default UserForm;
