import React from "react";
import { useState, useEffect } from "react";
import  "./Formog.css";

export default function Formog() {
    const [firstName, setFirstName] = "";

    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        gender: "",
        country: "",
        skills:[]
    });

    const [errorFields,setErrorFields]=useState({
            firstName: false,
            email: false,
            gender: false,
            country: false,
        })

    const handleSubmit = (event) => {
        event.preventDefault();
        if(isFormValidOnSubmit()){
            console.log("vaid")
            return
        }
        console.log("Invaid")
    
    };

    const handleChange = (event) => {
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        isFormValidOnBlur(event)
    };

    const handleCheckbox=(event)=>{
        let newSkills=[...fields.skills];
        if(event.target.checked){
            newSkills.push(event.target.value)
        }else{
            newSkills=newSkills.filter((skill)=>skill !== event.target.value)
        }


        setFields((prev) => ({
            ...prev,
            [event.target.name]: newSkills,
        }));
        isFormValidOnBlur(event)
    }

    console.log(fields.skills)

    //SOLUTION ONE
    // const isFormValid=()=>{
    //     if(fields.firstName===""){
    //         setErrorFields((prev)=>({
    //             ...prev,
    //             firstName:true
    //         }))
    //         return false
    //     }else{
    //         setErrorFields((prev)=>({
    //             ...prev,
    //             firstName:false
    //         }))
    //         return true;
    //     }
    // }

    const isFormValidOnSubmit=()=>{
        const error={
            firstName: false,
            email: false,
            gender: false,
            country: false,
        }
        if(fields.firstName===""){
            error.firstName=true
        }
        if(fields.email===""){
            error.email=true
        }
        if(fields.gender===""){
            error.gender=true
        }
        if(fields.country===""){
            error.country=true
        }
        setErrorFields(error)
        
        if(Object.values(error).some((error)=>error === true)){
            return false
        }
        return true 
    }

    const isFormValidOnBlur=(event)=>{
        const {name,value}=event.target;
        let error=false;
        if(name==="firstName" && value==""){
            error=true;
        }else if(name==="email" && (value=="" || !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value))){
            error=true;
        }else if(name==="gender" && value==""){
            error=true;        
        }else if(name==="country" && value==""){
            error=true;   
        }

        setErrorFields((prev)=>({
            ...prev,
            [name]:error
        }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-og" noValidate autoComplete="off">
                <h1>REGISTER</h1>
                <p className="caption">Please fill the form</p>
                <div className="input-section">
                    <label htmlFor="first-name">First Name <span className="danger">*</span></label>
                    <input type="text" id="first-name" name="firstName" onChange={handleChange} onBlur={isFormValidOnBlur} required/> 
                {errorFields.firstName&&<p className="danger">First name is required</p>}
                </div>

                <div className="input-section">
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" name="email" onChange={handleChange} onBlur={isFormValidOnBlur}/>
                    {errorFields.email&&<p className="danger">Email is required</p>}
                </div>

                <div className="input-section radio-group">
                    <label htmlFor="">Gender</label>
                    <div>
                    <label htmlFor="mail" className="radio-button">mail</label>
                    <input type="radio" id="mail" name="gender" value="mail" onChange={handleChange} onBlur={isFormValidOnBlur}/>
                    <label htmlFor="femail" className="radio-button">femail</label>
                    <input type="radio" id="femail" name="gender" value="femail" onChange={handleChange} onBlur={isFormValidOnBlur}/>
                    </div>
                    {errorFields.gender&&<p className="danger">Gender  is required</p>}
                </div>

                <div className="input-section dropdown-section">
                    <label htmlFor="">country</label>
                    <select name="country" id="" onChange={handleChange} onBlur={isFormValidOnBlur}>
                        <option value="">select</option>
                        <option value="uae">UAE</option>
                        <option value="india">INDIA</option>
                        <option value="canada">CANADA</option>
                        <option value="america">AMERICA</option>
                    </select>
                    {errorFields.country&&<p className="danger">country is required</p>}
                </div>
                <div className="input-section radio-group">
                    <label htmlFor="skills">Skills</label>
                    <div>
                    <label htmlFor="javascript" className="radio-button">Javascript</label>
                    <input type="checkbox" id="javascript" name="skills" value="javascript" onChange={handleCheckbox} onBlur={isFormValidOnBlur}/>
                    <label htmlFor="react" className="radio-button">React</label>
                    <input type="checkbox" id="react" name="skills" value="react" onChange={handleCheckbox} onBlur={isFormValidOnBlur}/>
                    <label htmlFor="css" className="radio-button">CSS</label>
                    <input type="checkbox" id="css" name="skills" value="css" onChange={handleCheckbox} onBlur={isFormValidOnBlur}/>
                    </div>
                    {errorFields.gender&&<p className="danger">Gender  is required</p>}
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}
