import { configureStore } from '@reduxjs/toolkit'

import playlistSlice from './playlists-slice'

const store = configureStore({
  reducer: { playlists: playlistSlice.reducer },
})

export default store
