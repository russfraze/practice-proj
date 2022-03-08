import UserForm from './UserForm'


const NewUser = (props) => {
    
    const addUser = (userData) => {
        const newUserData = {
            ...userData,
            id: Math.random().toString(),
        }
        props.onAdd(newUserData)
    }

    return (
        <UserForm onSaveUser={addUser}/>
    )
}

export default NewUser;