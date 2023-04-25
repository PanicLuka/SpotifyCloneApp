import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlistItems: [],
    dinnerPlaylistItems: [],
  },

  reducers: {
    setAllPlaylists(state, action) {
      state.playlistItems = action.payload
    },
    setAllDinnerPlaylists(state, action) {
      state.dinnerPlaylistItems = action.payload
    },
  },
})

export const playlistsActions = playlistSlice.actions

export default playlistSlice
