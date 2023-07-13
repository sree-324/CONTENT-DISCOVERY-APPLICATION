import React from 'react'
import './Registrationpage.css';
import bgImg from './content1.jfif';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
export default function Registrationpage() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
 
  return (
    <section className="bodyrp">
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                   
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    
                    <Link to="/"><button className='btn'>Create Account</button></Link>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}