import {useFormik} from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Form = () => {
  const [personType, setPersonType] = useState("teacher")
  const [isRegistered, setIsRegistered] = useState(false)
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues : {
      name : "",
      email : "",
      password : "",
      confirmPassword : "",
    },
    onSubmit : values => {
      console.log("values :", values, personType)
      // if(personType === "teacher"){
      //   <BrowserRouter>
      //     <Route path='/teacher' element={<Teacher/>} />
      //   </BrowserRouter>
        
      // }
      // else{
      //   <BrowserRouter>
      //     <Route path='/student' element={<Student/>} />
      //   </BrowserRouter>
        
      // }

      if (personType === 'teacher') {
        navigate('/teacher');
      } else {
        navigate('/student');
      }
      formik.resetForm()
    },
    validate : values => {
      let errors = {}
      if(!values.name){
        errors.name = "*Required Name"
      }
      if(!values.email){
        errors.email = "*Required Email"
      }
      if(!values.password){
        errors.password = "*Required Password"
      }
      if(!values.confirmPassword || values.password !== values.confirmPassword){
        errors.confirmPassword = "*Password did't matched"
      }
      if(values.password && values.password.length < 1){
        errors.password = "Password length should be 10"
      }
      return errors
    }
  })
  const changeIsRegistered = () => {
    setIsRegistered(true)
  }
  console.log(isRegistered)
  return(
   
      <div className="bg-container">
        <form autoComplete="off" className="myForm" onSubmit={formik.handleSubmit}>
          <label htmlFor="name" className="name">Name</label>
          <input type="text" id="name" name="name" className="inputName" {...formik.getFieldProps("name")}/>
          {formik.touched.name && formik.errors.name ? <p className='error'>{formik.errors.name}</p>: null}

          <label htmlFor="email" className="name">Email</label>
          <input type="email" id="email" name="email" className="inputName" {...formik.getFieldProps("email")}/>
          {formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}</p>: null}

          <label htmlFor="password" className="name">Password</label>
          <input type="password" id="password" name="password" className="inputName" {...formik.getFieldProps("password")}/>
          {formik.touched.password && formik.errors.password ? <p className='error'>{formik.errors.password}</p>: null}

          <label htmlFor="confirmPassword" className="name">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="inputName" {...formik.getFieldProps("confirmPassword")}/>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className='error'>{formik.errors.confirmPassword}</p>: null}
          
          <div>
            <input type="radio" id="teacher" value="teacher" name="person" onChange={(e)=>setPersonType(e.target.value)} checked={personType === "teacher"}/>
            <label htmlFor="teacher" className="radio-button">Teacher</label>

            <input type="radio" id="student" value="student" name="person"
             onChange={(e)=>setPersonType(e.target.value)} checked={personType === "student"}/>
            <label htmlFor="student" className="radio-button">Student</label>
          </div>
          <div className="button-container">
            <button type="submit" onClick={changeIsRegistered}>Register</button>
          </div>
          
        </form>
        
      </div>
    
    
  )
}
export default Form