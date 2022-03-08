import User from './User'

const UserList = (props) => {

    const deleteHandler = (id) => {
        console.log(id)

        const filterList = props.users.filter(
            function (user) {
                return user.id !== id
            }
        )

        props.updateList(filterList)
    }

    if (props.users.length === 0) {
        return <h2>There are currently no users</h2>
    }

    if (props.users.length > 0) {
        return (props.users.map((user) => (
            <User
                onDel={deleteHandler}
                name={user.name}
                age={user.age} 
                id={user.id}
                key={user.id}
                />
        )))
    }

}

export default UserList; 