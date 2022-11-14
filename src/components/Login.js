import React, {useEffect, useState} from 'react'
import '../styles/style.css';
import { useNavigate} from 'react-router-dom';


const fetchedLoginData = () => {
    let store = JSON.parse(localStorage.getItem('loginData'));
    if(store)
    {
        return JSON.parse(localStorage.getItem('loginData'));
    }
    else {
        return [];
    }
}

const Login = () => {
    const navigate = useNavigate();

    const [inputList, setInputList] = useState({
        email:"", 
        pass:""
    })

    const [login, setLogin] = useState(fetchedLoginData());

    const {email, pass} = inputList;

    const loginImg = require('../assets/signin-image.jpg');

    const submitForm = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('list'));
            console.log(userData);
            const userLogin =  userData.filter((el, i)=>{
                return el.email === email // check for both email & password
            });
        
            if(userLogin.length === 0)
            {
                alert("Invalid details");
            }else 
            {
                console.log("User is logged in successfully");
                navigate('/details');
            }
        
            
        
    }

    useEffect(()=>{
        localStorage.setItem('loginData', JSON.stringify(login));
    }, [login]);

  return (
    <section className="sign-in">
    <div className="container">
        <div className="signin-content">
            <div className="signin-image">
                <figure><img src={loginImg} alt="sing up image" /></figure>
                <a href="#" className="signup-image-link">Login Your Account</a>
            </div>

            <div className="signin-form">
                <h2 className="form-title">Login</h2>
                <form method="POST" className="register-form" id="login-form">
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="text" name="email" id="email"
                        onChange={(e)=>setInputList({...inputList, [e.target.name]:e.target.value})}
                        placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" name="your_pass" id="your_pass" 
                         onChange={(e)=>setInputList({...inputList, [e.target.name]:e.target.value})}
                        placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                        <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                    </div>
                    <div className="form-group form-button">
                        <button type="submit" name="signin" id="signin" 
                        className="form-submit" value="Log in"
                        onClick={(e)=>submitForm(e)}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="social-login">
                    <span className="social-label">Or login with</span>
                    <ul className="socials">
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Login