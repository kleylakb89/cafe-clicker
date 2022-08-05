import React, { useState } from "react";
import "./style.css";
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Login from '../../components/Login';
import Auth from '../../utils/auth';
import avac1 from '../../images/Avacado 1.png'

function Signup() {
  // sets up the form for signing up a new user
  const [formState, setFormState] = useState({
    name: '',
    password: '',
  });
  const [createUser, { error, data }] = useMutation(CREATE_USER);

  // handles formstate changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // handles the form submit to create a token for login
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <div class="snowflakes" aria-hidden="true">
  
  <div class="snowflake">
  <img src={avac1} className="avac"></img>
  </div>
  <div class="snowflake">
  <img src={avac1} className="avac"></img>
  </div>
  <div class="snowflake">
  <img src={avac1} className="avac"></img>
  </div>
  <div class="snowflake">
  <img src={avac1} className="avac"></img>
  </div>
  <div class="snowflake">
  <img src={avac1} className="avac"></img>
  </div>
  <div class="snowflake">
  <img src={avac1} className="avac"></img>

  </div>
  <div class="snowflake">
  <img src={avac1} className="avac"></img>

  </div>
  <div class="snowflake">
  <img src={avac1} className="avac"></img>

  </div>
  <div class="snowflake">
  <img src={avac1} className="avac"></img>

  </div>
  <div class="snowflake">
  <img src={avac1} className="avac"></img>

  </div>
</div>
    <div className="sign">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          {data ? (
            <p>
              Success!
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
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
              <button className="up-btn">Sign up</button>
            </form>
          )}

          {error && (
            <div>
              {error.message}
            </div>
          )}
        </div>
        <Login />
      </div>
    </div>
    </>
  );
}

export default Signup;