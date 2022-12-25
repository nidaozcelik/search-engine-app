import Search from './components/search'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, } from "react-router-dom";
import Account from './components/search/account'
import Navbar from './components/layout/navbar'

function App() {
  return (
    <div className='container'>
      <div className='search-container'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div >
  )
}

export default App
