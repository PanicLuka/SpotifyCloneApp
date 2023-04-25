import classes from './PlaylistCard.module.css'

const PlaylistCard = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.coverImages} src={props.source} />
      <p className={classes.playlistName}>{props.name}</p>
      <p className={classes.playlistDescription}>{props.description}</p>
    </div>
  )
}

export default PlaylistCard
