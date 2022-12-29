import React, { useEffect, useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { createWord,resetSearchedWord, resetShowCreateModal, setNotifications, resetNotifications, setShowNotification } from '../../features/words-slice'
import { SearchContext } from './search-context'

const SearchCreateWord = () => {
  const dispatch = useDispatch()
  const { searchedWord, showCreateModal } = useContext(SearchContext)

  const [meaning, setMeaning] = useState('')

  const handleClose = () => {
    dispatch(resetShowCreateModal())
  }

  const handleOnClickCreateWord = () => {
    dispatch(createWord({ name: searchedWord, meaning: meaning }))
    dispatch(setNotifications(
      {
        key: Math.random(),
        status: 'Success',
        message: 'Successfully saved.'
      }))

    handleClose()
    dispatch(setShowNotification(true))
    dispatch(resetSearchedWord())
  }

  const handleChangeMeaning = (e) => {
    setMeaning(e)
  }

  useEffect(() => {
    resetNotifications()
  }, [])

  return <div className='add-word'>
    <Modal show={showCreateModal} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{searchedWord}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control as="textarea" rows={3} onChange={(e) => handleChangeMeaning(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleOnClickCreateWord}>Save</Button>
      </Modal.Footer>
    </Modal>
  </div>
}

export default SearchCreateWord