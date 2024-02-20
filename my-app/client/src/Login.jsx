import React, { useRef, useState } from "react";

// export default function Login({setIsSubmitted}) {
//   const [errorMessage, setErrorMessage] = useState({});
//   const exampleRef = useRef('');

//   console.log('exampleRef', exampleRef, exampleRef.current, exampleRef.current.value)

//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "Invalid username",
//     pass: "Invalid password"
//   }


//   const showErrorMessage = (name) => {
//     return name === errorMessage.name && (
//       <div>
//         {errorMessage.message}
//       </div>
//     )
//   }

//   function Submit(event) {
//     event.preventDefault();
//     var {uname, pass} = document.forms[0];
//     console.log('document forms', document.forms)

//     const userData = database.find((user) => user.username === uname.value)

//     if (userData) {
//       if (userData.password !== pass.value) {
//         setErrorMessage({name: "pass", message: errors.pass})
//       } else {
//         setIsSubmitted(true)
//       }
//     } else {
//       setErrorMessage({name: "uname", message: errors.uname})
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={Submit}>
//         <div>
//           <label>
//             username
//           </label>
//           <input type="text" name="uname">
//           </input>
//           {showErrorMessage("uname")}
//         </div>
//         <div>
//           <label>
//             password
//           </label>
//           <input type="password" name="pass">
//           </input>
//           {showErrorMessage("pass")}
//         </div>
//         <div>
//           <input type="submit">
//           </input>
//         </div>
//       </form>
//     </div>
//   )
// }

export default function Login() {

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
  ]

  const errors = {
    username: "Invalid Username",
    password: "Invalid Password"
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = document.forms[0];
    console.log('username', username, username.value, password, password.value)
    const validUser = database.find(entry => entry.username === username.value)
    console.log('valid user',validUser)

    if (validUser) {
        if (validUser.password !== password.value) {
          setErrorMessage({name: "password", message: errors.password})
        } else {
          setErrorMessage({})
          console.log('success!')
        }
    } else {
      setErrorMessage({name: "username", message: errors.username})
    }
  }

  const showErrorMessage = (errorType) => {
    return errorType === errorMessage.name &&
      <div>
        {errorMessage.message}
      </div>
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
          </label>
          <input
            type="text"
            name="username"
          />
        </div>
        {showErrorMessage("username")}
        <div>
          <label>
            Password:
          </label>
          <input
            type="password"
            name="password"
          />
          {showErrorMessage("password")}
        </div>
        <div>
          <button>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}