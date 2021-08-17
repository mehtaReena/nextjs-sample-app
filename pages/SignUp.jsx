import { signIn } from 'next-auth/client';
import { useState } from 'react';


export default function SignUp() {
    const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
const onFormSubmit = async (e) => {
        e.preventDefault();
        //Getting value from useRef()

        //Validation
        if (!email || !email.includes('@') || !password) {
            alert('Invalid details');
            return;
        }
        //POST form values
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        //Await for data for any desirable next steps
        const data = await res.json();
        console.log(data);
    };

    return (
        <form method='post' >

          <label>
            email
            <input name='username' type='text'
             value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Password
            <input name='password' type='password'
             value={password} onChange={e => setPassword(e.target.value)}/>
          </label>
          <button type='submit' onClick={onFormSubmit}>Sign in</button>
        </form>
      )
    }