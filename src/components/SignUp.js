import React from 'react';
import './signup.css';
import {useForm} from 'react-hook-form';



function SignUp() {
    const {register,handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

        return  <form className="register" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        ref={register}/>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        ref={register}/>
                    <input
                        type="password"
                        placeholder="Password" name="password" 
                        ref={register({ required : "Password is invalid" , minLength: {value: 6, message: "Too short"} })}/>
                        {errors.password && <p>{errors.password.message}</p>}
                    <input type="submit"/>
                </form>
}



export default SignUp