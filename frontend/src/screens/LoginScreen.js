import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  const togglePassword = (e) => {
    if (showPassword) {
        setShowPassword(false);
    } else {
        setShowPassword(true)
    }
}

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group md="3" controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password' }
            // className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            />
            {/* <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </button>         */}
        </Form.Group>
        
        
        <Button type='submit' variant='success'>
          Sign In
        </Button>
        <div className="mt-4">
			              <div className="d-flex justify-content-center links">
			                New User? <Link to="/register" className="ml-2">Register</Link>
			              </div>
			              <div className="d-flex justify-content-center links">
			                <Link to="/forgot-password">Forgot Password?</Link>
			              </div>
			            </div>
      </Form>

      {/* <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row> */}
    </FormContainer>
  )
}

export default LoginScreen
