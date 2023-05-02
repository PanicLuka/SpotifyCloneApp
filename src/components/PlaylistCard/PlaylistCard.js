import { useState } from 'react'
import classes from './PlaylistCard.module.css'
import { useNavigate } from 'react-router-dom'
import { PlayCircleFill } from 'react-bootstrap-icons'

const PlaylistCard = (props) => {
  const [isHovering, setIsHovering] = useState(false)
  const navigate = useNavigate()

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const navigateToTracks = () => {
    navigate(`/tracks/${props.id}`)
    // console.log(props.id)
  }

  return (
    <div
      className={classes.card}
      onClick={navigateToTracks}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img className={classes.coverImages} src={props.source} />
      {isHovering && (
        <div className={classes.divPlayBtn}>
          <PlayCircleFill className={classes.svgPlayBtn} />
          {/* <svg
            className={classes.svgPlayBtn}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            color="green"
            fill="currentColor"
            class="bi bi-play-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          </svg> */}
        </div>
      )}
      <p className={classes.playlistName}>{props.name}</p>
      <p className={classes.playlistDescription}>{props.description}</p>
    </div>
  )
}

export default PlaylistCard
