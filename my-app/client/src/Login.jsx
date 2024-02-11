import React from "react";

export default function Login() {

  return (
    <div>
      <form>
        <div>
          <label>
            username
          </label>
          <input type="text">
          </input>
        </div>
        <div>
          <label>
            password
          </label>
          <input type="password">
          </input>
        </div>
        <div>
          <button>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}