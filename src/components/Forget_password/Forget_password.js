import React, {Component} from 'react';
import loginbanner from './astrambg.svg'; // gives image path
import astramlogo from './logo.svg'; // gives image path
//import './Login.css';

class Forget_password extends Component {
  render() {
    return (

		<section class="forgotsection">
		<div class="forgot-box">
			<div class="welcomelogo text-center">
				<h2>Welcome to the</h2>
				<img src={astramlogo} alt="logo"></img>
			</div>
			<div class="forgot-title">
				<h2>Forgot Password?</h2>
			</div>
			<div class="login-form">
				<div class="form-group">
					<input type="text" class="form-control" name="email" placeholder="Your Email" />
				</div>
				<div class="form-group">
					<input type="submit" value="Send" class="btn" />
				</div>
				<div class="form-group form-link">
					<a href="/login">Back to login?</a>
				</div>
			</div>
		</div>
	</section>
      
    );
  }
}

export default Forget_password;