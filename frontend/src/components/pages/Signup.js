import React from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";
export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      
    <div className="application">
      <div className="container11">
        <div className="card11">

      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>SignUp</h1>
          
          <h4>Are you a doctor?</h4>
          <Link to="/SignupDoctor">Register Here</Link>
          <br></br>
          <Link to="/login">Login</Link>





          <hr/>
        </div>
        <div >
          <label>Name</label>
          <input
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          <br></br>
          <error>
            {errors.name?.type === "required" && "Name is required"}
          </error>
        </div>
        <div>
          <label>Email</label>
          <input
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <br></br>
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </error>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            placeholder="Enter Your Number"
            type="number"
            {...register("number", {
              minLength: 6,
              maxLength: 12,
            })}
          />
          <br></br>
          <error>
            {errors.number?.type === "minLength" &&
              "Entered number is less than 6 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more than 12 digits"}
          </error>
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Enter password"
            {...register("password", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />

          <br></br>
          <error>
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </error>
        </div>
        
        <div>
          <input className="button" type="submit" />
        </div>
        
      </form>
      
      </div>
      
     
      </div>
      
      
    </div>
    
    
    </section>
    
  );
}
