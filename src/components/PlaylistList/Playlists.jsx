import PlaylistCard from '../PlaylistCard/PlaylistCard'
import useFetch from '../../hooks/use-fetch'

import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Playlists = (props) => {
  const { getFeaturedPlaylists } = useFetch()
  const { getDinnerPlaylists } = useFetch()

  useEffect(() => {
    getFeaturedPlaylists()
    getDinnerPlaylists()
  }, [])

  const focusPlaylists = useSelector((state) => state.playlists.playlistItems)
  const dinnerPlaylists = useSelector(
    (state) => state.playlists.dinnerPlaylistItems,
  )

  if (
    focusPlaylists.playlists === undefined ||
    dinnerPlaylists.playlists === undefined
  ) {
    return <p>Still loading...</p>
  }

  if (props.category === 'dinner') {
    return (
      <>
        {dinnerPlaylists.playlists.items.slice(0, 8).map((item) => {
          return (
            <div key={item.id}>
              {item.images.map((image) => {
                return (
                  <PlaylistCard
                    source={image.url}
                    name={item.name}
                    key={item.id}
                    id={item.id}
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

  return (
    <>
      {focusPlaylists.playlists.items.slice(0, 8).map((item) => {
        return (
          <div key={item.id}>
            {item.images.map((image) => {
              return (
                <PlaylistCard
                  source={image.url}
                  name={item.name}
                  key={item.id}
                  id={item.id}
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

export default Playlists
