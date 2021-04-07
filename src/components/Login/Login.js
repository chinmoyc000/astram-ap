import React, {Component} from 'react';

import loginbanner from './astrambg.svg'; // gives image path
//import './Login.css';

class Login extends Component {
  state = {
    users:[]
}


  loginForm =  (event) => {
    event.preventDefault();
    event.persist();

    alert('ok..');
      
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var formdata = new FormData();
      formdata.append("username", "chinmoy");
      formdata.append("password", "123456");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

    
    
    fetch('http://localhost/php-react/all-users.php',requestOptions)
    .then(response => {
        response.json().then(function(data) {

      if(data.success === 1)
      {
        console.log(data);
        alert("ok..");
        this.setState({
            users:data.users.reverse()
        });
      } 
      else{
        // this.context.post_show(false);
      }   




                 
        }.bind(this));
    })
    .catch(error => {
        console.log(error);
    });





  }

  render() {
    return (

      <div>
      <section class="login-section" >
        <img src={loginbanner} alt=""></img>
        <div class="container">
			<div class="login-box">
      <h1>Login</h1>
      <form onSubmit={this.loginForm}>
      <div class="login-form">
					<div class="form-group">
						<label for="email">Email</label>
						<input type="text" class="form-control" name="username" placeholder="Your Username" />
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" class="form-control" name="password" placeholder="Your Password" />
					</div>
					<div class="form-group form-link">
						<label for="rememberme">
            <input type="checkbox" id="rememberme" name="rememberme"></input>
							<span>Remember Me</span>
						</label>
						<a href="/forget-password">Forgot Password?</a>
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn" />
					</div>
				</div>
        </form>
        <div class="other-link">
					<a href="#" target="_blank" class="googleplay"></a>
					<a href="#" target="_blank" class="weblink"></a>
				</div>


        </div>
        </div>
      </section>

<div class="footer-link">
<div class="container">
  <div class="footer-info">
    <span>Copyright © Astram 2021. <a href="#">Privacy Policy</a></span>
    <a href="tel:+27718983840" class="phoneinfo">+27 71 898 3840</a>
    <a href="mailto:info@astramapp.com">info@astramapp.com</a>
  </div>
</div>
</div>
</div> 
      
    );
  }
}

export default Login;