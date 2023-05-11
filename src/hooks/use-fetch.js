import { useDispatch } from 'react-redux'
import { playlistsActions } from '../store/playlists-slice'
import axios from 'axios'

const useFetch = (id) => {
  const dispatch = useDispatch()

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET,
    REACT_APP_BASE_URL,
  } = process.env

  // const startSongURL = `${REACT_APP_BASE_URL}/me/player/play`

  const featuredPlaylistsURL = `${REACT_APP_BASE_URL}/browse/featured-playlists`
  const dinnerPlaylistURL = `${REACT_APP_BASE_URL}/browse/categories/dinner/playlists`

  const playlistURL = `${REACT_APP_BASE_URL}/playlists/${id}`

  const tokenURL = 'https://accounts.spotify.com/api/token'

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

  // const configStartSong = {
  //   body: {
  //     context_uri: 'spotify:track:1DIXPcTDzTj8ZMHt3PDt8p',
  //     offset: {
  //       position: 5,
  //     },
  //     position_ms: 0,
  //   },
  // }

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/x-www-form-urlencoded',
    },
  }

  // TODO: practice try catch
  // const getToken = async () => {
  //   try{
  //     const {data} = await axios.post(tokenURL, configTokenBody, configTokenHeaders)
  //     localStorage.setItem('token', data.access_token)
  //   }catch(err){
  //     console.error(err)
  //   }
  // }
  const getToken = async () => {
    await axios
      .post(tokenURL, configTokenBody, configTokenHeaders)
      .then((response) => {
        localStorage.setItem('token', response.data.access_token)
      })
  }

  const getFeaturedPlaylists = async () => {
    try {
      await axios.get(featuredPlaylistsURL, config).then((response) => {
        dispatch(playlistsActions.setAllPlaylists(response.data))
      })
    } catch (err) {
      console.log(err)
    }
  }

  // const putSongToStartState = async () => {
  //   try {
  //     await axios.put(startSongURL, configStartSong, config)
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

  const getDinnerPlaylists = async () => {
    try {
      await axios.get(dinnerPlaylistURL, config).then((response) => {
        dispatch(playlistsActions.setAllDinnerPlaylists(response.data))
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
    getFeaturedPlaylists,
    getDinnerPlaylists,
    getPlaylistById,
    getToken,
    // putSongToStartState,
  }
}

export default useFetch
