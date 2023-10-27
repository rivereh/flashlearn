import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Quiz from './pages/Quiz'
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
      <HashRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={user ? <Home /> : <Navigate to='/login' />}
            />
          </Routes>
          <Routes>
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to='/' />}
            />
          </Routes>
          <Routes>
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to='/' />}
            />
          </Routes>
          <Routes>
            <Route
              path='/quiz'
              element={!user ? <Quiz /> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </HashRouter>
    </div>
  )
}

export default App
