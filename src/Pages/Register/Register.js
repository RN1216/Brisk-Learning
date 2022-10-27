import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Form  from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import  NavDropdown  from 'react-bootstrap/NavDropdown';


const Register = () => {
    const {createUser,providerLogin} = useContext(AuthContext);

    const googleProvider =new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [error,setError]= useState('');
    const [success , setSuccess] = useState(false);
    const navigate = useNavigate(); 
 
     const handleRegisterForm=(event)=>{
         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const photoURL= form.photoURL.value;
         const email = form.email.value;
         const password = form.password.value;
 
         console.log(name,photoURL,email,password);
         if(!/(?=.*[A-Z])/.test(password)){
          setError('Please At least one uppercase and one lowercase');
          return;
      }
  
      if(password.length <6){
          setError('please give your password length at least six characters');
          return;
      }
      if(!/(?=.*[!#$%&? "])/.test(password)){
          setError('Please at least one speical character');
          return;
      }
  
      setError('');
 
         createUser(email,password)
         .then(result=>{
             const user = result.user;
             console.log(user);
             setError('');
             setSuccess(true);
             navigate('/');
             form.reset();
         })
         .catch(error=>{
           console.error(error)
           setError(error.message);
         });
        
     }

     const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
          const user = result.user;
          console.log(user);
          setError('');
             navigate('/');
            
        })
        .catch(error=>{
          console.error(error)
          setError(error.message);
        })
      }
      const handleGitHubSignIn= ()=>{
        providerLogin(githubProvider)
        .then(result=>{
          const user = result.user;
          console.log(user);
          setError('');
             navigate('/');
            
        })
        .catch(error=>{
          console.error(error)
          setError(error.message);
        })
      }
    return (
        <div className='justify-content-btween'>
            <div className='text-center '><h2 className='text-info'>Registration Now</h2></div>
            <Form onSubmit={handleRegisterForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-info'>Full Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="full name"  />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-info'>Photo URL</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="photo url"  />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-info'>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-info'>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-muted">
          Already you have an account?<Link className='text-info' to='/login'> Login now.</Link>
          <p className='text-danger'>{error}</p>
          {success && <h4 className='txt-success'>Sign Up Successfull!!!</h4>}
        </Form.Text>
      </Form.Group>

            
      <Button className='text-align-center' id="input-group-dropdown-2"
          align="end" variant="outline-info" type="submit">
        Register Now!
      </Button>
      <NavDropdown.Divider />
      <ButtonGroup className='mt-3'>
        <Button onClick={handleGoogleSignIn} className="my-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button onClick={handleGitHubSignIn}  className="my-2" variant="outline-secondary">
          <FaGithub></FaGithub> Login With GitHub
        </Button>
      </ButtonGroup>
    </Form>
        </div>
    );
};

export default Register;