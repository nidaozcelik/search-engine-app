import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: {
    data: [
      {
        name: 'book',
        meaning: 'a book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover',
      },
      {
        name: 'car',
        meaning: 'a car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of goods.',
      }
    ],
    showWord: [],
    searchedWord: '',
  },
  createWord: {
    showCreateModal: false
  },
  notifications: {
    notificationsList: [],
    showNotification: false
  },
}

export const words = createSlice({
  name: 'words',
  initialState: initialState,
  reducers: {
    setSearchedWord: (state, action) => {
      state.words.searchedWord = action.payload
    },
    resetSearchedWord: (state, action) => {
      state.words.searchedWord = initialState.words.searchedWord
    },
    createWord: (state, action) => {
      state.words.data.push(action.payload)
    },
    setShowWord: (state, action) => {
      state.words.showWord = action.payload
    },
    resetShowWord: (state, action) => {
      state.words.showWord = initialState.words.showWord
    },
    setShowCreateModal: (state, action) => {
      state.createWord.showCreateModal = action.payload
    },
    resetShowCreateModal: (state, action) => {
      state.createWord.showCreateModal = initialState.createWord.showCreateModal
    },
    setNotifications: (state, action) => {
      state.notifications.notificationsList.push(action.payload)
    },
    setShowNotification: (state, action) => {
      state.notifications.showNotification = action.payload
    },
    resetNotifications: (state, action) => {
      state.notifications = initialState.notifications
    }
  }
})

export const {
  setSearchedWord,
  resetSearchedWord,
  createWord,
  setShowWord,
  resetShowWord,
  setShowCreateModal,
  resetShowCreateModal,
  setNotifications,
  resetNotifications,
  setShowNotification
} = words.actions;
export default words.reducer;
