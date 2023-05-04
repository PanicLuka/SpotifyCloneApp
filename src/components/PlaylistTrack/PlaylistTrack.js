import classes from './PlaylistTrack.module.css'

const PlaylistTrack = (props) => {
  // console.log(props.duration)
  return (
    <div className={classes.mainDiv}>
      <p className={classes.orderNumber}>{props.id + 1}</p>
      <img src={props.imgSrc} className={classes.albumCover} />
      <div className={classes.textDiv}>
        <p className={classes.songName}>{props.songName}</p>
        <p className={classes.artist}>{props.artists}</p>
      </div>
      <div className={classes.albumDiv}>
        <p className={classes.albumName}>{props.albumName}</p>
      </div>
      <p className={classes.addedAt}>{props.songDate}</p>
      <p className={classes.duration}>{props.duration}</p>
    </div>
  )
}

export default PlaylistTrack
