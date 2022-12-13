import React from 'react'
import './login.css'

const Login = () => {
  return (
      <div className="wrapper">
          <div className="navbar">
              <div className="icon">
                  <h2 className="logo"><ins>Trello</ins></h2>
              </div>
          </div>
          <div className="title-text">
              <div className="title login">Login Form</div>
              <div className="title signup">Signup Form</div>
          </div>
          <div className="form-container">
              <div className="slide-controls">
                  <input type="radio" name="slide" id="login" checked />
                  <input type="radio" name="slide" id="signup" />
                  <label for="login" className="slide login">Login</label>
                  <label for="signup" className="slide signup">Signup</label>
                  <div className="slider-tab"></div>
              </div>
              <div className="form-inner">
                  <form action="#" className="login">
                      <div className="field">
                          <input type="text" placeholder="Email Address" required />
                      </div>
                      <div className="field">
                          <input type="password" placeholder="Password" required />
                      </div>
                      <div className="pass-link">
                          <a href="#">Forgot password?</a>
                      </div>
                      <div className="field btn">
                          <div className="btn-layer"></div>
                          <input type="submit" value="Login" />
                      </div>
                      <div className="signup-link">
                          Don't have an account? <a href="">Signup now</a>
                      </div>
                      <p className="liw">Log in with</p>
                      <div className="icons">
                          <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                          <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                          <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                          <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                      </div>
                  </form>
                  <form action="#" className="signup">
                      <div className="field">
                          <input type="text" placeholder="Email Address" required />
                      </div>
                      <div className="field">
                          <input type="password" placeholder="Password" required />
                      </div>
                      <div className="field">
                          <input type="password" placeholder="Confirm password" required />
                      </div>
                      <div className="field btn">
                          <div className="btn-layer"></div>
                          <input type="submit" value="Signup" />
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Login