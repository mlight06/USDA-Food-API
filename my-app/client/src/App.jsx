import React, {useState} from 'react';

import Search from './Search';
import Login from './Login';
import LikeButton from './LikeButtons';


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
      <LikeButton />
      <Search />
    </div>
  );
}

