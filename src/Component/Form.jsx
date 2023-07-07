import React from "react";
import { useState, useEffect } from "react";

function Form() {

    const [firstName, setFirstName] = "";

    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        gender: "",
        country: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName);
    };


    const handleChange = (event) => {
        // setFirstName(event.target.value)
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    console.log(fields);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" onChange={handleChange} />
                <br />
                <label htmlFor="">Email</label>
                <input type="email" name="email" onChange={handleChange} />
                <br />
                <label htmlFor="">Gender</label>
                <br />
                <label htmlFor="mail">mail</label>
                <input type="radio" id="mail" name="gender" value="mail" onChange={handleChange} />
                <label htmlFor="femail">femail</label>
                <input type="radio" id="femail" name="gender" value="femail" onChange={handleChange} />
                <br />
                <label htmlFor="">country</label>
                <select name="country" id="" onChange={handleChange}>
                    <option value="">select</option>
                    <option value="uae">UAE</option>
                    <option value="india">INDIA</option>
                    <option value="canada">CANADA</option>
                    <option value="america">AMERICA</option>
                </select>
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Form;
