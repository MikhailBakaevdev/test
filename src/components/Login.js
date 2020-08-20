import React, { useState } from 'react';
import './signup.css';
import '../App.css';
import {useForm} from 'react-hook-form';
import firebase from './firebaseAuth'
import { withRouter,Link } from 'react-router-dom';



function Login(props) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {register,handleSubmit, errors, formState, getValues} = useForm({mode: "onChange"});

    const onSubmit = (data) => {
        console.log(data)
    }
        return (<form className="register" onSubmit={handleSubmit(onSubmit)}>
                    <div className="navbar">
                        <Link className="nav" style={{textDecoration: 'none'}} to="/signup">
                        <span className="links">
                            Register
                        </span>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to="/login">
                        <span className="links">
                            login
                        </span>
                        </Link>
                    </div>
                    <input
                        className={errors.email ? " red" : getValues("email") ? " green" : " "}
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        ref={register ({ required : true , pattern: { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message : "Email is invalid"}})}/>
                        {errors.email && <p>{errors.email.message}</p>}
                    <input
                        className={errors.password ? " red" : getValues("password") ? " green" : " "}
                        type="password"
                        placeholder="Password"
                        name="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        ref={register({ required : true , pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, message: "6 characters, 1 lowercase and 1 uppercase" }})}/>
                        {errors.password && <p>{errors.password.message}</p>}
                    <input  className="submit" disabled={!formState.isValid} type="submit" onClick={onLogin}/>
                </form>)
        async function onLogin(){
            try {
                await firebase.login(email,password)
                props.history.replace('/account')
            } catch(error) {
                alert(error.message)
            }
        }

}



export default withRouter(Login)