import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { playlistsActions } from '../store/playlists-slice'
import axios from 'axios'

const useFetch = (id) => {
  const dispatch = useDispatch()

  const playlistsURL = 'https://api.spotify.com/v1/browse/featured-playlists'
  const dinnerPlaylistURL =
    'https://api.spotify.com/v1/browse/categories/dinner/playlists'

  const tracksURL = 'https://api.spotify.com/v1/playlists/' + id + '/tracks'

  const coverImageURL = 'https://api.spotify.com/v1/playlists/' + id + '/images'

  const [error, setError] = useState(null)

  const config = {
    headers: {
      Authorization:
        'Bearer BQCCWbmSdz9l53PFhlKNjUZm8M_Gg_9mfvMJ082ZwLM3sTmh6cObM2rf0zd7E9vaGef0Q9d99u-G-3d3RsmIdbVgfyLw0w3EUFqi5emlCZdE1uWlayaz',
      'Content-type': 'application/x-www-form-urlencoded',
    },
  }

  const getFeaturedPlaylists = async () => {
    await axios.get(playlistsURL, config).then((response) => {
      dispatch(playlistsActions.setAllPlaylists(response.data))
    })
  }

  const getDinnerPlaylists = async () => {
    await axios.get(dinnerPlaylistURL, config).then((response) => {
      dispatch(playlistsActions.setAllDinnerPlaylists(response.data))
    })

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
    await axios.get(tracksURL, config).then((response) => {
      console.log(response.data)
      dispatch(playlistsActions.setAllTracks(response.data))
    })
  }

  const getPlaylistCoverImage = async () => {
    await axios.get(coverImageURL, config).then((response) => {
      dispatch(playlistsActions.setCoverImage(response.data))
    })
  }

  return {
    error,
    getFeaturedPlaylists,
    getDinnerPlaylists,
    getTracksByPlaylist,
    getPlaylistCoverImage,
  }
}

export default useFetch
