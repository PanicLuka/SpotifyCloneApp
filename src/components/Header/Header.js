import classes from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import { CaretLeftFill } from 'react-bootstrap-icons'
import { CaretRightFill } from 'react-bootstrap-icons'

const Header = () => {
  const navigate = useNavigate()

  const toLoginPage = () => {
    navigate('login')
  }

  const postTokenTest = () => {
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body:
        'grant_type=client_credentials&client_id=8eb93a59630947ed9f7426ebcd010133&client_secret=1a0abc3bbd9d46129c15d41adc88f7da',
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
