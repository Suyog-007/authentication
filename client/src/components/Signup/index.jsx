import React from "react";
import { useState } from 'react';
import styles from './styles.module.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [error,setError]=useState("")
    const Navigate = useNavigate();

    const handleChange = (event) => {
        const { name,value } = event.target;  
        setData((data)=>{ return{ ...data, [name]: value };
    });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            console.log(data);
            const url="http://localhost:8080/api/users";
            const {data:res} = await axios.post(url,data); 
            Navigate("/login");
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status>=400 && error.response.status <=500 ){
                setError(error.response.data.message)
            }
        }

    }

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1> Welcome Back</h1>
                    <Link to="/login">
                        <button type='button' className={styles.white_btn}>
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.signup_form_container} onSubmit={handleSubmit}>
                        <div className={styles.signupcont}>
                        <h1>Create Account</h1>
                          
                        <input type="text"
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input type="text"
                            placeholder='Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                        <input type="email"
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input type="password"
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className ={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Sign Up
                        </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>);
}

export default Signup;