import React, { useContext } from 'react';
import { AuthContext } from './../../context/AuthProvider';
import  Form  from 'react-bootstrap/Form';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';

const Login = () => {
    const {loginUser}= useContext(AuthContext);
    const [error,setError]= useState('');

    const navigate = useNavigate(); 
    const location =useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLoginForm =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        loginUser(email,password)
        .then(result =>{
          const user =result.user;
          console.log(user);
           setError('');
          navigate(from,{replace: true});
          form.reset();

        })
        .catch(error=>{
          console.error(error)
          setError(error.message);
        })
    
    }
    return (
        <div>
        <Form onSubmit={handleLoginForm}>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
   <Form.Control name='email' type="email" placeholder="Enter email" required />
   
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control name='password' type="password" placeholder="Password" required />
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicCheckbox">
   
   <Form.Text className="text-muted">
   Haven't Your account yet? Please<Link to='/registration'> Register Now.</Link> 
   <p className='text-danger'>{error}</p>
   </Form.Text>
 </Form.Group>
 <Button variant="outline-primary" type="submit">
   LogIn
 </Button>
</Form>
   </div>
    );
};

export default Login;