import React, {useState} from 'react'
import "./styles.css";

export function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
        
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='contain'>
            <h1>Login</h1>
            <div className='form-group'>
              <label htmlFor="name">Username:</label>
              <input type="text" name='name' id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>  
            </div>
            <div>
                <label htmlFor='pass'>Password:</label>
                <input type="password" name="pass" id='pass' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>    
            <input type="submit" value="LOGIN" className="login big"/>
        </div>
    </form>
  )
}
