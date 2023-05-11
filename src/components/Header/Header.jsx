import classes from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Header = () => {
  const navigate = useNavigate()

  const toLoginPage = () => {
    navigate('login')
  }

  return (
    <div className={classes.navBar}>
      <div className={classes.accountBtnsDiv}>
        <button className={classes.signInBtn} onClick={toLoginPage}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Header
