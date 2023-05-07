import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Sidebar from './components/Sidebar/Sidebar'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import PlaylistTracks from './components/PlaylistTracks/PlaylistTracks'
import { useDispatch } from 'react-redux'
import { playlistsActions } from './store/playlists-slice'
import useFetch from './hooks/use-fetch'
import { useEffect } from 'react'

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const { getToken } = useFetch()

  useEffect(() => {
    getToken()
  }, [])

  useEffect(() => {
    setInterval(() => {
      getToken()
    }, 3000000)
  }, [])

  if (!location.pathname.includes('tracks')) {
    dispatch(playlistsActions.removeAllTracks())
    dispatch(playlistsActions.removeCoverImage())
    dispatch(playlistsActions.removePlaylist())
  }

  return (
    <main>
      {location.pathname !== '/login' && <Header />}
      {location.pathname !== '/login' && <Sidebar />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tracks/:id" element={<PlaylistTracks />} />
      </Routes>
    </main>
  )
}

export default App
