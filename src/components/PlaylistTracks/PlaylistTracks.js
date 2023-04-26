import { useEffect } from 'react'
import useFetch from '../../hooks/use-fetch'
import classes from './PlaylistTracks.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const PlaylistTracks = () => {
  const param = useParams()

  const { getPlaylistCoverImage } = useFetch(param.id)
  const { getTracksByPlaylist } = useFetch(param.id)

  //   console.log(param.id + 'THIS IS ID')
  useEffect(() => {
    getPlaylistCoverImage()
    getTracksByPlaylist()
  }, [])

  const playListCoverImage = useSelector(
    (state) => state.playlists.playListCoverImage,
  )

  //   console.log(playListCoverImage)

  if (playListCoverImage === undefined) {
    return <p>still loading...</p>
  }

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.textDiv}>
          {/* <img src={playListCoverImage?.url} className={classes.coverImage} /> */}
          {playListCoverImage.map((image) => {
            return <img src={image.url} className={classes.coverImage} />
          })}
        </div>
      </div>
    </>
  )
}

export default PlaylistTracks
