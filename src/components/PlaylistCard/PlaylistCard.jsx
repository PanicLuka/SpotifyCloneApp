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
  }

  return (
    <div
      className={classes.card}
      onClick={navigateToTracks}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={classes.imageContainer}>
      <img className={classes.coverImages} src={props.source} />

      </div>
      {isHovering && (
        <div className={classes.divPlayBtn}>
          <PlayCircleFill className={classes.svgPlayBtn} />
        </div>
      )}
      <p className={classes.playlistName}>{props.name}</p>
      <div className={classes.textHolder}>
      <p className={classes.playlistDescription}>{props.description}</p>

      </div>
    </div>
  )
}

export default PlaylistCard
