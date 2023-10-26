import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  const { user } = useAuthContext()

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path='/flashlearn/'
              element={user ? <Home /> : <Navigate to='/flashlearn/login/' />}
            />
          </Routes>
          <Routes>
            <Route
              path='/flashlearn/login/'
              element={!user ? <Login /> : <Navigate to='/flashlearn/' />}
            />
          </Routes>
          <Routes>
            <Route
              path='/flashlearn/signup/'
              element={!user ? <Signup /> : <Navigate to='/flashlearn/' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
