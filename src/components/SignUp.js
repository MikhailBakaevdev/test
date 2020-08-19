import React from 'react';
import './signup.css';
import {useForm} from 'react-hook-form';



function SignUp() {
    const {register,handleSubmit, errors, formState, getValues} = useForm({mode: "onChange"});

    const onSubmit = (data) => {
        console.log(data)
    }
        return  <form className="register" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        className={errors.name ? " red" : getValues("name") ? " green" : " "}
                        type="text"
                        placeholder="Name"
                        name="name"
                        ref={register ({ required : true ,  minLength: {value: 2, message: "Name is invalid"} })}/>
                        {errors.name && <p>{errors.name.message}</p>}
                    <input
                        className={errors.email ? " red" : getValues("email") ? " green" : " "}
                        type="text"
                        placeholder="Email"
                        name="email"
                        ref={register ({ required : true , pattern: { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message : "Email is invalid"}})}/>
                        {errors.email && <p>{errors.email.message}</p>}
                    <input
                        className={errors.password ? " red" : getValues("password") ? " green" : " "}
                        type="password"
                        placeholder="Password"
                        name="password" 
                        ref={register({ required : true , pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, message: "6 characters, 1 lowercase and 1 uppercase" }})}/>
                        {errors.password && <p>{errors.password.message}</p>}
                    <input  className="submit" disabled={!formState.isValid} type="submit"/>
                </form>
}



export default SignUp