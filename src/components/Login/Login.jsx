import React, { useState } from 'react'
import classes from './Login.module.css'
import { Apple, Facebook, Google, Spotify } from 'react-bootstrap-icons'

const Login = () => {
  // TODO/RESEARCH: do research how to use single object state, so you edit only nessessary fields
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')

  const emailChangeHander = (event) => {
    setEnteredEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  }

  return (
    <>
      <header>
        <nav className={classes.navBar}>
          <div className={classes.divBar}>
            <Spotify className={classes.spotifyLogo} />
            <p className={classes.title}>Spotify</p>
          </div>
        </nav>
      </header>
      <div className={classes.divBody}>
        <p className={classes.titleParagraph}>
          To continue, sign in to Spotify.
        </p>
        <div className={classes.btnsDiv}>
          <button className={classes.btnFacebook}>
            <Facebook className={classes.facebookLogo} />
            CONTINUE WITH FACEBOOK ACCOUNT
          </button>
          <button className={classes.btnApple}>
            <Apple className={classes.appleLogo} />
            CONTINUE WITH APPLE ACCOUNT
          </button>
          <button className={classes.btnGoogle}>
            <Google className={classes.googleLogo} />
            CONTINUE WITH GOOGLE ACCOUNT
          </button>
          <hr className={classes.hr}></hr>
        </div>
        <div className={classes.filedsDiv}>
          <form>
            <p className={classes.credentialsParagraph}>
              Email address or username
            </p>
            <input
              type="Email"
              placeholder="Email address or username"
              className={classes.emailInput}
              onChange={emailChangeHander}
            ></input>
            <p className={classes.credentialsParagraph}>Password</p>
            <input
              type="Password"
              placeholder="Password"
              className={classes.passwordInput}
              onChange={passwordChangeHandler}
            ></input>
            <p className={classes.forgetParagraph}>Forgot password?</p>
            <div className={classes.signInDiv}>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                ></input>
                <label>Remember me</label>
              </div>
              <button className={classes.signInBtn}>SIGN IN</button>
            </div>
            <hr className={classes.hr}></hr>
            <p className={classes.dontHaveAccountPar}>Don't have an account?</p>
            <button className={classes.signUpBtn}>SIGN UP TO SPOTIFY</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
