import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import { MapView } from './components/MapView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<MapView />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
