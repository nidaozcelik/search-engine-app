import Search from './components/search'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, } from 'react-router-dom';
import History from './components/history'
import Navbar from './components/layout/navbar'

function App() {
  return (
    <div className='container'>
      <div className='search-container'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/history' element={<History />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div >
  )
}

export default App
