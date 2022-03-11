import { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import styles from './AddUsers.module.css';

const AddUser = props => {
  const nameInputRef = useRef(); // returns DOM object with prop.
  const ageInputRef = useRef(); // useRef is recommended when only reading value

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  // const usernameChangeHandler = e => setEnteredUsername(e.target.value);
  // const ageChangeHandler = e => setEnteredAge(e.target.value);
  const errorHanlder = () => setError(null);

  const addUserHandler = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      });
      return;
    }

    if (+enteredUserAge < 1) {
      // 스트링을 넘버로 간단히 바꿔줌
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age',
      });
      return;
    }

    const rnum = Math.random();
    props.onAddUser(enteredName, enteredUserAge, rnum);
    // setEnteredUsername('');
    // setEnteredAge('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // Rarely do this when only resetting entered value
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHanlder}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            // value={enteredUsername}
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            // value={enteredAge}
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
