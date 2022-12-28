import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setWord, resetWord, setNotifications, resetNotifications, setShowNotification } from "../../features/words-slice"
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import AddWord from './add-word'
import SearchContent from './search-content'
import { SearchContext } from './search-context'

const Search = () => {
  const dispatch = useDispatch()
  const [showData, setShowData] = useState([])
  const [showAddWord, setAddWord] = useState(false)

  const word = useSelector((state) => state.words.word)
  const data = useSelector((state) => state.words.data)
  const notifications = useSelector((state) => state.words.notifications)
  const showNotification = useSelector((state) => state.words.showNotification)

  const toggleShowStatus = () => {
    dispatch(setShowNotification(false))
    dispatch(resetNotifications())
  }

  const toggleShowAddWord = () => {
    setAddWord(!showAddWord)
    dispatch(setShowNotification(false))
    dispatch(resetNotifications())
    setShowData([])
  }

  const handChangeWordState = (e) => {
    dispatch(setWord(e))
  }

  const handleOnClickSearch = () => {
    if (word && data.some(item => item.name === word)) {
      let findWord = data.find(item => item.name.includes(word))
      setShowData([findWord])
      setAddWord(false)
      dispatch(resetNotifications())
    } else {
      dispatch(resetWord())
      dispatch(setNotifications(
        {
          key: Math.random(),
          status: 'Warning',
          message: 'This word has no meaning. If you want, you can add it by pressing the (+) button.'
        }))
      dispatch(setShowNotification(true))
      setAddWord(false)
    }
  }

  const contextValue = {
    word,
    setAddWord,
    showData,
  }

  return <SearchContext.Provider value={contextValue}>
    <div className='search-wrapper'>
      <div className='search-header'>
        <div className='search-box'>
          <input placeholder='What are you looking for? (e.g., book, car...)' onChange={(e) => handChangeWordState(e.target.value)}>
          </input>
          <svg class="w-6 h-6 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <div className='search-button'>
          <button className='add' onClick={toggleShowAddWord}>+</button>
          <button className='search' onClick={handleOnClickSearch}>?</button>
        </div>
      </div>
      <div className='search-content'>
        <SearchContent showData={showData} />
        <ToastContainer position="top-end" className="p-3">
          {
            notifications &&
            notifications.map(notification => {
              return <Toast onClose={toggleShowStatus} key={notification.key} show={showNotification} animation={false}>
                <Toast.Header>
                  <strong className="me-auto">{notification.status}</strong>
                </Toast.Header>
                <Toast.Body>{notification.message}</Toast.Body>
              </Toast>
            })
          }
        </ToastContainer>
        {showAddWord && <AddWord />}
      </div>
    </div>
  </SearchContext.Provider>
}

export default Search