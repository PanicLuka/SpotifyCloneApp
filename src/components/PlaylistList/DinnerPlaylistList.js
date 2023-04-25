import PlaylistCard from '../PlaylistCard/PlaylistCard'
import useFetch from '../../hooks/use-fetch'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const PlaylistList = () => {
  const { getDinnerPlaylists } = useFetch()

  useEffect(() => {
    getDinnerPlaylists()
  }, [])

  const playlists = useSelector((state) => state.playlists.dinnerPlaylistItems)

  if (playlists.playlists === undefined) {
    return <p>Still loading...</p>
  }

  return (
    <>
      {playlists.playlists.items.map((item, index) => {
        if (index > 7) {
          return
        }
        return (
          <div>
            {item.images.map((image) => {
              return (
                <PlaylistCard
                  source={image.url}
                  name={item.name}
                  key={item.id}
                  description={item.description}
                />
              )
            })}

            <hr />
          </div>
        )
      })}
    </>
  )
}

export default PlaylistList
