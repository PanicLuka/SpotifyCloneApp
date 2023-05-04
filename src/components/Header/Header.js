import classes from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import { CaretLeftFill } from 'react-bootstrap-icons'
import { CaretRightFill } from 'react-bootstrap-icons'
import React from 'react'

const Header = () => {
  const navigate = useNavigate()

  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env

  // console.log(process.env.REACT_APP_CLIENT_ID)

  const toLoginPage = () => {
    navigate('login')
  }

  const postTokenTest = () => {
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body:
        'grant_type=client_credentials&client_id=' +
        REACT_APP_CLIENT_ID +
        '&client_secret=' +
        REACT_APP_CLIENT_SECRET,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      // console.log(res)
    })
  }

  return (
    <>
      <div className={classes.navBar}>
        <div className={classes.backAndForwardDiv}>
          <button className={classes.btnBack}>
            <div className={classes.backIconDiv}>
              <CaretLeftFill color="white" />
            </div>
          </button>
          <button className={classes.btnForw}>
            <div className={classes.frontIconDiv}>
              <CaretRightFill color="white" />
            </div>
          </button>
        </div>
        <div className={classes.accountBtnsDiv}>
          <p className={classes.signUpTitle} onClick={postTokenTest}>
            Register
          </p>
          <button className={classes.signInBtn} onClick={toLoginPage}>
            Sign In
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
