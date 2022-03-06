import React from 'react';
import { useState } from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge, id) =>
    setUsersList(currentList => [
      ...currentList,
      { name: uName, age: uAge, id: id },
    ]);

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
