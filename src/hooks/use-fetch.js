import { useDispatch } from 'react-redux'
import { playlistsActions } from '../store/playlists-slice'
import axios from 'axios'
import queryString from 'query-string'

const useFetch = (id) => {
  const dispatch = useDispatch()

  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env

  const playlistsURL = 'https://api.spotify.com/v1/browse/featured-playlists'
  const dinnerPlaylistURL =
    'https://api.spotify.com/v1/browse/categories/dinner/playlists'

  const tracksURL = 'https://api.spotify.com/v1/playlists/' + id + '/tracks'

  const coverImageURL = 'https://api.spotify.com/v1/playlists/' + id + '/images'

  const playlistURL = 'https://api.spotify.com/v1/playlists/' + id

  const tokenURL = 'https://accounts.spotify.com/api/token'

  // const [error, setError] = useState(null)

  const configTokenBody =
    'grant_type=client_credentials&client_id=' +
    REACT_APP_CLIENT_ID +
    '&client_secret=' +
    REACT_APP_CLIENT_SECRET

  const configTokenHeaders = {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  }

  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-type': 'application/x-www-form-urlencoded',
    },
  }

  const getToken = async () => {
    await axios
      .post(tokenURL, configTokenBody, configTokenHeaders)
      .then((response) => {
        localStorage.setItem('token', response.data.access_token)
      })
  }

  const getFeaturedPlaylists = async () => {
    try {
      await axios.get(playlistsURL, config).then((response) => {
        dispatch(playlistsActions.setAllPlaylists(response.data))
      })
    } catch (err) {
      console.log(err)
    }
  }

  const getDinnerPlaylists = async () => {
    try {
      await axios.get(dinnerPlaylistURL, config).then((response) => {
        dispatch(playlistsActions.setAllDinnerPlaylists(response.data))
      })
    } catch (err) {
      console.log(err)
    }

    // await axios
    //   .get(
    //     // 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd/tracks',
    //     'https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd/images',
    //     config,
    //   )
    //   .then((response) => {
    //     console.log(response.data)
    //   })
  }

  const getTracksByPlaylist = async () => {
    try {
      await axios.get(tracksURL, config).then((response) => {
        // console.log(response.data)
        dispatch(playlistsActions.setAllTracks(response.data))
      })
    } catch (err) {
      console.log(err)
    }
  }

  const getPlaylistCoverImage = async () => {
    try {
      await axios.get(coverImageURL, config).then((response) => {
        dispatch(playlistsActions.setCoverImage(response.data))
      })
    } catch (err) {
      console.log(err)
    }
  }

  const getPlaylistById = async () => {
    try {
      await axios.get(playlistURL, config).then((response) => {
        dispatch(playlistsActions.setPlaylist(response.data))
      })
    } catch (err) {
      console.log(err)
    }
  }

  return {
    // error,
    getFeaturedPlaylists,
    getDinnerPlaylists,
    getTracksByPlaylist,
    getPlaylistCoverImage,
    getPlaylistById,
    getToken,
  }
}

export default useFetch
