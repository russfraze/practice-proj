
const User = (props) => {

    const delHandler = (e) => {
        props.onDel(e.target.id)

    }

    return(
        <div id={props.id} onClick={delHandler}>
            <h2 id={props.id}>{props.name}</h2>
            <h3 id={props.id}>{props.age}</h3>
        </div>
    )
}

export default User;
