import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';


const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // handles the login information for the user
    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });
      Auth.login(data.login.token);

    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: '',
      password: '',
    });
  };



  return (
    <div className="login">
      {data ? (
        <p>
          Success!
        </p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            <span className="log-title">Login</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required=""
            defaultValue={formState.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
            defaultValue={formState.password}
            onChange={handleChange}
          />
          <button className="in-btn">Login</button>
        </form>
      )}

      {error && (
        <div>
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Login;