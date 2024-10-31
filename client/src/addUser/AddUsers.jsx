import React, { useState } from 'react';
import './addUsers.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddUsers = () => {
  const users = {
    name: '',
    email: '',
    address: '',
  };
  const [user, setUser] = useState(users);

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:8000/api/user', user)
      .then((response) => {
        toast.success(response.data.message, { position: 'top-right' });
        navigate('/');
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addUsers">
      <Link to="/" type="button" class="btn btn-secondary">
        Back
      </Link>
      <h3>Add New User</h3>
      <form className="adduserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">name: </label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter you name"
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">email: </label>
          <input
            type="email"
            id="email"
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter you email"
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="address">address: </label>
          <input
            type="text"
            id="address"
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter you address"
          ></input>
        </div>
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
