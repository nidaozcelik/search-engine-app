import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { wordAdd, resetWord, setNotifications, resetNotifications, setShowNotification } from "../../features/words-slice"
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

const AddWord = ({ word, setAddWord }) => {
  const dispatch = useDispatch()
  const [meaning, setMeaning] = useState()

  const notifications = useSelector((state) => state.words.notifications)
  const showNotification = useSelector((state) => state.words.showNotification)

  useEffect(() => {
    resetNotifications()
  }, [])

  const toggleShowStatus = () => {
    dispatch(setShowNotification(false))
    dispatch(resetNotifications())
  }

  const handChangeMeaningState = (e) => {
    setMeaning(e)
  }

  const handleOnClickAddWord = () => {
    dispatch(wordAdd({ name: word, meaning: meaning }))
    dispatch(setNotifications(
      {
        key: Math.random(),
        status: 'Success',
        message: 'Successfully saved.'
      }))
    dispatch(setShowNotification(true))
    setAddWord(false)
    dispatch(resetWord())
  }

  return <div className='add-word'>
    <InputGroup>
      <Form.Control
        className='add-word-input'
        placeholder="Add meaning"
        as="textarea"
        onChange={(e) => handChangeMeaningState(e.target.value)}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={handleOnClickAddWord}>
        Add
      </Button>
    </InputGroup>
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
  </div>
}

export default AddWord