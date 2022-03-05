import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUsers.module.css';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = e => setEnteredUsername(e.target.value);
  const ageChangeHandler = e => setEnteredAge(e.target.value);

  const addUserHandler = e => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1)
      // 스트링을 넘버로 간단히 바꿔줌
      return;
    // const info = [enteredUsername, enteredAge];
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <Card givenStyle={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUsername}
          id="username"
          type="text"
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          value={enteredAge}
          id="age"
          type="number"
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
