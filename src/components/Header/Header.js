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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                color="white"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-caret-left-fill"
                viewBox="0 0 16 16"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg> */}
              <CaretLeftFill color="white" />
            </div>
          </button>
          <button className={classes.btnForw}>
            <div className={classes.frontIconDiv}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                color="white"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg> */}
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
