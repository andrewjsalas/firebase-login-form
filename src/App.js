import { signup, logout, login, useAuth } from './firebaseConfig';
import { useRef, useState } from 'react';
import './index.css';

function App() {
  const [loading, setLoading] = useState(false)
  const currentUser = useAuth()

  const emailRef = useRef()
  const passwordRef = useRef()

  // Handle signup api call to firebase
  async function handleSignup() {
    setLoading(true)
    try {
      // Grab current value of the email/password ref
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      alert('error')
    }    
    setLoading(false)
  }

  // Handle login 
  async function handleLogin() {
    setLoading(true)
    try {
      await login(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      alert('error')
    }    
    setLoading(false)
  }

  // Handle Logout api call to firebase
  async function handleLogut() {
    setLoading(true)
    try {
      await logout()
    } catch (error) {
      alert('Error')
    }
    setLoading(false)
  }

  return (
    <div className="App">

      <div>Currently Logged In As: { currentUser?.email } </div>

      <div className='fields'>
        <input ref={emailRef} placeholder='email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
      </div>

      {/* Disables singup button when user is signed in */}
      <button disabled={loading || currentUser} onClick={handleSignup}>Sign Up</button>
      <button disabled={loading || currentUser} onClick={handleLogin}>Log In</button>
      <button disabled={loading || !currentUser} onClick={handleLogut} >Log Out</button>
    </div>
  );
}

export default App;
