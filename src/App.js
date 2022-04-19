import { signup } from './firebaseConfig';
import { useRef } from 'react';
import './index.css';

function App() {
  const emailRef = useRef()
  const passwordRef = useRef()

  // call to firebase api
  async function handleSignup() {
    await signup(email, password)
  }

  return (
    <div className="App">

      <div className='fields'>
        <input ref={emailRef} placeholder='email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
      </div>

      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default App;
