import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: {
    meanings: null,
    showWord: [],
    searchedWord: '',
  },
  createWord: {
    createdWords: null,
    showCreateModal: false
  },
  notifications: {
    notificationsList: null,
    showNotification: false
  }
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
    setMeaning: (state, action) => {
      state.words.meanings = action.payload
    },
    resetMeaning: (state, action) => {
      state.words.meanings = initialState.words.meanings
    },
    createWord: (state, action) => {
      state.createWord.createdWords = action.payload
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
      state.notifications.notificationsList = action.payload
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
  setMeaning,
  resetMeaning,
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
