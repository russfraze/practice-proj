import { useState } from 'react';
import './App.css';
import NewUser from './components/NewUser';
import UserList from './components/UserList';

function App() {

  const [list, setList] = useState([])

  const addUserHandler = (userData) => {
    setList(
      (prevList) => {
        return [
          userData,
          ...prevList
        ]
      }
    )
  }

  console.log(list)

  return (
    <div className="App">
      <NewUser onAdd={addUserHandler} />
      <UserList users={list} updateList={setList}/>
    </div>
  );
}

export default App;
