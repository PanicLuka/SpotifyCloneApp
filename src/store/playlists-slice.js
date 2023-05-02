import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlistItems: [],
    dinnerPlaylistItems: [],
    playlistTracks: [],
    playListCoverImage: [],
    playlist: [],
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
    removeAllTracks(state) {
      state.playlistTracks = []
    },
    setCoverImage(state, action) {
      state.playListCoverImage = action.payload
    },
    removeCoverImage(state) {
      state.playListCoverImage = []
    },
    setPlaylist(state, action) {
      state.playlist = action.payload
    },
    removePlaylist(state) {
      state.playlist = []
    },
  },
})

export const playlistsActions = playlistSlice.actions

export default playlistSlice
