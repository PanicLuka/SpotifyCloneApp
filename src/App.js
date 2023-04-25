import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Sidebar from './components/Sidebar/Sidebar'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  const location = useLocation()

  return (
    <main>
      {location.pathname !== '/login' && <Header />}
      {location.pathname !== '/login' && <Sidebar />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  )
}

export default App
