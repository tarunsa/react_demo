import React from 'react';
import ValidateForm from '../Pages/ValidateForm';
import useForm from '../Pages/useForm';
import { Link } from "react-router-dom";
import '../Styles/Register.css';
const Register=({submitForm})=>{
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        
      );
    return(
       <div style={{overflow:'hidden'}}>
           <div className='mt-5'>
          <h1 style={{textAlign:'center '}}>Create a account</h1>
           </div>
           <div className='row'>
           <div className="col-md-6 offset-md-3 mt-3 p-4">
        <div className="form contact-form">
          <form  className="form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="First Name" required value={values.Firstname}
              onChange={handleChange} />
              {errors.Firstname && <p>{errors.Firstname}</p>}
            </div>
            <div className="form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Last Name" required value={values.Lastname}
              onChange={handleChange} />
              {errors.Lastname && <p>{errors.Lastname}</p>}
            </div>
            <div className="form-group mt-3">
              <input type="email" className="form-control" name="email" id="email" placeholder="Email" required value={values.email}
              onChange={handleChange} />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-group mt-3">
              <input type="password" className="form-control" name="password" id="password" placeholder="Password" required value={values.password}
              onChange={handleChange}/>
              {errors.password && <p>{errors.password}</p>}
            </div>
            

            <div className="my-3">
              
            </div>
            <Link to="/">
            <div className="text-center"><button type="submit">Register</button></div></Link>
          </form>
          </div>
        </div>
      </div>
       </div>
                  
    )
}
export default Register;