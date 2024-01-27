import './App.css'
import HomePage from './pages/home'
import ShopPage from './pages/shop'
import { Route, Routes/*, Navigate, useLocation */ } from 'react-router-dom'
import { Header } from './components/Header/Header.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Footer } from './components/Footer/Footer.jsx'

function App () {
  return (
    <div className='main'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
