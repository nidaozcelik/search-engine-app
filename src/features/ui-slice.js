import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: {
    meanings: null,
    showWord: [],
    searchedWord: '',
    voiceSearch: false
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
    setVoiceSearch: (state, action) => {
      state.words.voiceSearch = action.payload
    },
    setMeaning: (state, action) => {
      state.words.meanings = action.payload
    },
    resetMeaning: (state, action) => {
      state.words.meanings = initialState.words.meanings
    },
    setShowWord: (state, action) => {
      state.words.showWord = action.payload
    },
    resetShowWord: (state, action) => {
      state.words.showWord = initialState.words.showWord
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
  setVoiceSearch,
  setMeaning,
  resetMeaning,
  setShowWord,
  resetShowWord,
  setNotifications,
  resetNotifications,
  setShowNotification
} = words.actions;
export default words.reducer;
