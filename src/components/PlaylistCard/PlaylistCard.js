import classes from './PlaylistCard.module.css'
import { useNavigate } from 'react-router-dom'

const PlaylistCard = (props) => {
  const navigate = useNavigate()

  const navigateToTracks = () => {
    navigate(`/tracks/${props.id}`)
    console.log(props.id)
  }

  return (
    <div className={classes.card} onClick={navigateToTracks}>
      <img className={classes.coverImages} src={props.source} />
      <p className={classes.playlistName}>{props.name}</p>
      <p className={classes.playlistDescription}>{props.description}</p>
    </div>
  )
}

export default PlaylistCard
