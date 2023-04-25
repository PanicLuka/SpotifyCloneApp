import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { playlistsActions } from '../store/playlists-slice'
import axios from 'axios'

const useFetch = () => {
  const dispatch = useDispatch()

  const playlistsURL = 'https://api.spotify.com/v1/browse/featured-playlists'
  const dinnerPlaylistURL =
    'https://api.spotify.com/v1/browse/categories/dinner/playlists'

  const [error, setError] = useState(null)

  const config = {
    headers: {
      Authorization:
        'Bearer BQB8CWmWHhFXOMqsE9KroZwVRtqB__R80gWTgRGM6CruaqJmXQZ2wSI4WNlGsjUg1ifB253g_nhasbw2XsgvQCggGyo1sd4Zt5bfdW7R_i727FHo6KzZ',
      'Content-type': 'application/x-www-form-urlencoded',
    },
  }

  const getFeaturedPlaylists = async () => {
    await axios.get(playlistsURL, config).then((response) => {
      dispatch(playlistsActions.setAllPlaylists(response.data))
    })
    // setError(null)
    // try {
    //   await fetch(playlistsURL, {
    //     headers: {
    //       Authorization:
    //         'Bearer BQCCWCuiaQjgxq7B0jDUhc8DvowI1jpaqubxu3Lgkw07dZXLU6yh4f3o7ZALviixKXdZ62VIKwNvLagJeuEjopUcMdJCDqdjpskxhfLPGZesAj9u5gPl',

    //       'Content-type': 'application/x-www-form-urlencoded',
    //     },
    //   })
    //     .then((res) => {
    //       return res.json()
    //     })
    //     .then((data) => {
    //       dispatch(playlistsActions.setAllPlaylists(data))
    //     })
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!')
    // }
  }

  const getDinnerPlaylists = async () => {
    await axios.get(dinnerPlaylistURL, config).then((response) => {
      dispatch(playlistsActions.setAllDinnerPlaylists(response.data))
    })
    // setError(null)
    // try {
    //   await fetch(dinnerPlaylistURL, {
    //     headers: {
    //       Authorization:
    //         'Bearer BQB8CWmWHhFXOMqsE9KroZwVRtqB__R80gWTgRGM6CruaqJmXQZ2wSI4WNlGsjUg1ifB253g_nhasbw2XsgvQCggGyo1sd4Zt5bfdW7R_i727FHo6KzZ',

    //       // 'Content-type': 'application/x-www-form-urlencoded',
    //     },
    //   })
    //     .then((res) => {
    //       return res.json()
    //     })
    //     .then((data) => {
    //       dispatch(playlistsActions.setAllDinnerPlaylists(data))
    //     })
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!')
    // }
  }

  //   const getPlaylistsCoverImage = async (id) => {
  //     const playlistCoverImage =
  //     'https://api.spotify.com/v1/playlists/' + id + '/images'

  //     setError(null)
  //     try {
  //       await fetch(playlistCoverImage, {
  //         headers: {
  //           Authorization:
  //             'Bearer BQAlckmQHn3D8fUOKj8KVR48lIgdANTHNIFAKQgPT0_BKFbuXVI-j4JCq6QHY7VxeeRPKUV46e7VXTw85GRrvLDJ3UaSYngU5X_Z7QSaM44as3NYao5N',

  //           // 'Content-type': 'application/x-www-form-urlencoded',
  //         },
  //       }).then((res) => {
  //         return res.json()
  //       })
  //       // .then((data) => {
  //       //   dispatch(playlistsActions.setAllPlaylists(data))
  //       // })
  //     } catch (err) {
  //       setError(err.message || 'Something went wrong!')
  //     }
  //   }

  return {
    error,
    getFeaturedPlaylists,
    getDinnerPlaylists,
    // getPlaylistsCoverImage,
  }
}

export default useFetch
