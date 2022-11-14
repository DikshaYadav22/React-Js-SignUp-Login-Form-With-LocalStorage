import React, {useState} from 'react'
import '../styles/style.css';

const Login = () => {
    const fetchedData = JSON.parse(localStorage.getItem('list'));
    console.log(fetchedData);

    const [inputList, setInputList] = useState({
        name:"", 
        email:""
    })
    const login = require('../assets/signin-image.jpg');
  return (
    <section className="sign-in">
    <div className="container">
        <div className="signin-content">
            <div className="signin-image">
                <figure><img src={login} alt="sing up image" /></figure>
                <a href="#" className="signup-image-link">Login Your Account</a>
            </div>

            <div className="signin-form">
                <h2 className="form-title">Login</h2>
                <form method="POST" className="register-form" id="login-form">
                    <div className="form-group">
                        <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="your_name" id="your_name"
                        onChange={()=>setInputList({...inputList, [e.target.name]:e.target.value})}
                        placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" name="your_pass" id="your_pass" 
                         onChange={()=>setInputList({...inputList, [e.target.name]:e.target.value})}
                        placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                        <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                    </div>
                    <div className="form-group form-button">
                        <button type="submit" name="signin" id="signin" 
                        className="form-submit" value="Log in"
                        onClick={()=>submitForm()}
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