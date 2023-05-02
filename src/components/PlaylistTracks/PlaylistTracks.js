import { useEffect } from 'react'
import useFetch from '../../hooks/use-fetch'
import classes from './PlaylistTracks.module.css'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { Spotify } from 'react-bootstrap-icons'

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
      </div>
    </>
  )
}

export default PlaylistTracks
