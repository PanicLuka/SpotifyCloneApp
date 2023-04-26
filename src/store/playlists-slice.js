import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlistItems: [],
    dinnerPlaylistItems: [],
    playlistTracks: [],
    playListCoverImage: null,
  },

  reducers: {
    setAllPlaylists(state, action) {
      state.playlistItems = action.payload
    },
    setAllDinnerPlaylists(state, action) {
      state.dinnerPlaylistItems = action.payload
    },
    setAllTracks(state, action) {
      state.playlistTracks = action.payload
    },
    setCoverImage(state, action) {
      state.playListCoverImage = action.payload
    },
  },
})

export const playlistsActions = playlistSlice.actions

export default playlistSlice
