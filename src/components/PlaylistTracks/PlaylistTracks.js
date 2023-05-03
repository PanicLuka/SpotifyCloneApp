import { useEffect } from 'react'
import useFetch from '../../hooks/use-fetch'
import classes from './PlaylistTracks.module.css'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import {
  Spotify,
  PlayCircleFill,
  SuitHeart,
  ThreeDots,
} from 'react-bootstrap-icons'
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack'

const PlaylistTracks = () => {
  const { pathname } = useLocation()
  const param = useParams()
  const { getPlaylistCoverImage } = useFetch(param.id)
  const { getTracksByPlaylist } = useFetch(param.id)
  const { getPlaylistById } = useFetch(param.id)

  // console.log(param.id + 'THIS IS ID')
  useEffect(() => {
    getPlaylistCoverImage()
    getTracksByPlaylist()
    getPlaylistById()
    // console.log('I FIRE ONCE')
  }, [])

  const playListCoverImage = useSelector(
    (state) => state.playlists.playListCoverImage,
  )
  const playlist = useSelector((state) => state.playlists.playlist)
  const playListTracks = useSelector((state) => state.playlists.playlistTracks)

  if (playListCoverImage === undefined || playlist.followers === undefined) {
    return <p>still loading...</p>
  }

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.textDiv}>
          {playListCoverImage.map((image, index) => {
            return (
              <img src={image.url} className={classes.coverImage} key={index} />
            )
          })}
          <div className={classes.songTitleDiv}>
            <p className={classes.firstTitle}>Playlist</p>
            <p className={classes.secondTitle}>{playlist.name}</p>
            <p className={classes.playlistDescription}>
              {playlist.description}
            </p>
            <div className={classes.lastTitleRow}>
              <div className={classes.behindIconDiv}>
                <Spotify className={classes.spotifyIcon} />
              </div>
              <p className={classes.spotifyTitle}>Spotify</p>
              <p className={classes.dotParag}>.</p>
              <p className={classes.followersTitle}>
                {playlist.followers.total}
              </p>
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
        {playListTracks.items.map((item, index) => {
          return (
            <PlaylistTrack
              key={index}
              id={index}
              imgSrc={item.track.album.images[2].url}
              songName={item.track.name}
              albumName={item.track.album.name}
              artists={item.track.album.artists[0].name}
              duration={item.track.duration_ms}
              year={item.added_at.substr(0, 4)}
              month={item.added_at.substr(5, 2)}
              day={item.added_at.substr(8, 2)}
            />
          )
        })}
      </div>
    </>
  )
}

export default PlaylistTracks
