import { useEffect } from 'react'
import useFetch from '../../hooks/use-fetch'
import classes from './PlaylistTracks.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  Spotify,
  PlayCircleFill,
  SuitHeart,
  ThreeDots,
  Clock,
} from 'react-bootstrap-icons'
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack'
import TracksLoader from '../HomeLoader/TracksLoader'
import Sidebar from '../Sidebar/Sidebar'


const PlaylistTracks = () => {
  const param = useParams()
  const { getPlaylistById } = useFetch(param.id)

  useEffect(() => {
    getPlaylistById()
  }, [])

  const playlist = useSelector((state) => state.playlists.playlist)

  const formatDuration = (millis) => {
    var minutes = Math.floor(millis / 60000)
    var seconds = ((millis % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const formatDate = (addedAt) => {
    const date = new Date(addedAt)
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    return formattedDate
  }

  if (
    playlist.tracks === undefined ||
    playlist === undefined ||
    playlist.followers === undefined ||
    param.id !== playlist.id
  ) {
    return <TracksLoader />
  }
  return (
    <div className={classes.containerMain}>
      <Sidebar />
    <div className={classes.mainDiv}>
      <div className={classes.textDiv}>
        {playlist.images.map((image, index) => {
          return (
            <img src={image.url} className={classes.coverImage} key={index} />
          )
        })}
        <div className={classes.songTitleDiv}>
          <p className={classes.firstTitle}>Playlist</p>
          <p className={classes.secondTitle}>{playlist.name}</p>
          <p className={classes.playlistDescription}>{playlist.description}</p>
          <div className={classes.lastTitleRow}>
            <div className={classes.behindIconDiv}>
              <Spotify className={classes.spotifyIcon} />
            </div>
            <p className={classes.spotifyTitle}>Spotify</p>
            <p className={classes.dotParag}>.</p>
            <p className={classes.followersTitle}>{playlist.followers.total}</p>
            <p className={classes.dotParagSecond}>.</p>
            <p className={classes.numberOfSongsTitle}>
              {playlist.tracks.items.length} songs
            </p>
          </div>
        </div>
      </div>
      <div className={classes.borderDiv}>
        <div className={classes.backgroundDiv}>
          <PlayCircleFill className={classes.playBtn} />
        </div>
        <SuitHeart className={classes.likeIcon} />
        <ThreeDots className={classes.threeDots} />
      </div>
      <div className={classes.trackHeader}>
        <p className={classes.nameHeader}>Name</p>
        <p className={classes.albumHeader}>Album</p>
        <p className={classes.dateHeader}>Date</p>
        <Clock className={classes.timeHeader} />
      </div>
      <hr className={classes.borderLine}></hr>
      {playlist.tracks.items.map((item, index) => {
        const formattedDate = formatDate(item.added_at)
        const formattedDuration = formatDuration(item.track.duration_ms)
        return (
          <PlaylistTrack
            key={index}
            id={index}
            imgSrc={item.track.album.images[2].url}
            songName={item.track.name}
            albumName={item.track.album.name}
            artists={item.track.album.artists[0].name}
            duration={formattedDuration}
            songDate={formattedDate}
            audio={item.track.href}
          />
        )
      })}
    </div>
    </div>
  )
}

export default PlaylistTracks
