import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlistItems: [],
    dinnerPlaylistItems: [],
    playlist: [],
  },

  reducers: {
    setAllPlaylists(state, action) {
      state.playlistItems = action.payload
    },
    setAllDinnerPlaylists(state, action) {
      state.dinnerPlaylistItems = action.payload
    },

    setPlaylist(state, action) {
      state.playlist = action.payload
    },
    removePlaylist(state) {
      state.playlist = state.playlist
    },
  },
})

export const playlistsActions = playlistSlice.actions

export default playlistSlice
