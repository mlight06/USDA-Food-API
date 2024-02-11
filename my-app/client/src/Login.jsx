import React, { useState } from "react";

export default function Login({setIsSubmitted}) {
  const [errorMessage, setErrorMessage] = useState({});

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  }


  const showErrorMessage = (name) => {
    return name === errorMessage.name && (
      <div>
        {errorMessage.message}
      </div>
    )
  }

  function Submit(event) {
    event.preventDefault();
    var {uname, pass} = document.forms[0];
    console.log('document forms', document.forms)

    const userData = database.find((user) => user.username === uname.value)

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessage({name: "pass", message: errors.pass})
      } else {
        setIsSubmitted(true)
      }
    } else {
      setErrorMessage({name: "uname", message: errors.uname})
    }
  }

  return (
    <div>
      <form onSubmit={Submit}>
        <div>
          <label>
            username
          </label>
          <input type="text" name="uname">
          </input>
          {showErrorMessage("uname")}
        </div>
        <div>
          <label>
            password
          </label>
          <input type="password" name="pass">
          </input>
          {showErrorMessage("pass")}
        </div>
        <div>
          <input type="submit">
          </input>
        </div>
      </form>
    </div>
  )
}