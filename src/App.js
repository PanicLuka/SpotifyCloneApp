import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
