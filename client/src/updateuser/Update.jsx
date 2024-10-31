import React, { useState,useEffect } from 'react';
import './Update.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Updateusers = () => {
  const users = {
    name: '',
    email: '',
    address: '',
  };
  const [user, setUser] = useState(users);

  const navigate = useNavigate();
  const {id}=useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  useEffect (()=>{
    axios.get(`http://localhost:8000/api/user/${id}`)
    .then((response)=>{
      setUser(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[id]); //effect will change whenever the id variable changes

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/user/${id}`, user)
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
      <h3>Update User</h3>
      <form className="adduserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">name: </label>
          <input
            type="text"
            id="name"
            value={user.name}
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
            value={user.email}
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
            value={user.address}
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

export default Updateusers;
