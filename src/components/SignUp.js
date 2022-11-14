import React, {useEffect, useState} from 'react'
import '../styles/style.css';
import {useNavigate} from 'react-router-dom';

function storeData(){
   let token_Data = JSON.parse(localStorage.getItem('list'));
    if(token_Data){
        return JSON.parse(localStorage.getItem('list'))
    }else {
        return [];
    }
}

function SignUp() {
    const navigate = useNavigate();
    const logo = require('../assets/signup-image.jpg');
    const [inputHandler, setInputHandler] = useState({
        name: "", 
        email: '',
        pass: '', 
        re_pass: '', 
        agree_term: false
    })
    const {name, email, pass, re_pass, agree_term} = inputHandler;

    const[inputData, setInputData] = useState(storeData());

    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(inputData));
        
    }, [inputData] );

    const submitData = (e) => {
        e.preventDefault();
        setInputData([...inputData, inputHandler]);
        console.log(inputData);
       navigate('/login'); 

    }

  return (
    <section className="signup">
    <div className="container">
        <div className="signup-content">
            <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name" placeholder="Your Name"
                        value={name}
                            onChange={(e)=>setInputHandler({...inputHandler, [e.target.name]: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="Your Email"
                        value={email}
                            onChange={(e)=>setInputHandler({...inputHandler,[e.target.name]: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass"></label>
                        <input type="password" name="pass" id="pass" placeholder="Password"
                            onChange={(e)=>setInputHandler({...inputHandler,[e.target.name]: e.target.value})}
                            value={pass}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="re-pass"></label>
                        <input type="password" name="re_pass" id="re_pass" 
                        placeholder="Repeat your password"
                        onChange={(e)=>setInputHandler({...inputHandler,[e.target.name]: e.target.value})}
                        value={re_pass}
                        
                        />

                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="agree_term" id="agree-term" className="agree-term" 
                        onChange={(e)=>setInputHandler({...inputHandler,[e.target.name]: e.target.value})}
                        value={agree_term}

                        />
                        <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                    </div>
                    <div className="form-group form-button">
                        <button type="submit" name="signup" id="signup" 
                        onClick={(e)=>submitData(e)}
                        className="form-submit" value="Register">Register </button>
                    </div>

                </form>
            </div>
            <div className="signup-image">
                <figure><img src={logo} alt="sing up image" /></figure>
                <a href="#" className="signup-image-link">I am already member</a>
            </div>
        </div>
    </div>
</section>

  )
}

export default SignUp