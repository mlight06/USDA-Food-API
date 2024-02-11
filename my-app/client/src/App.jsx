import React, {useState} from 'react';

import Search from './Search';
import Login from './Login';


export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="App">
      {isSubmitted ?
        <div>
          Successful login!
        </div>
        : <Login setIsSubmitted={setIsSubmitted} />
      }
      <Search />
    </div>
  );
}

