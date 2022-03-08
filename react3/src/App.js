import React from 'react';
import { useState, Fragment } from 'react';
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
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
// https://reactjs.org/docs/fragments.html#short-syntax
// Fragment 대신 <> ~ </> 사용 가능
