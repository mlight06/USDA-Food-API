import React, { useState } from "react";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const showErrorMessage = (name) => {
    return name === errorMessage.name && (
      <div>
        {errorMessage.message}
      </div>
    )
  }

  function Submit(event) {
    event.preventDefault();
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
          <input type="password">
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