import { createSlice } from "@reduxjs/toolkit";

export const words = createSlice({
  name: 'words',
  initialState: {
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
    word: '',
    notifications: [],
    showNotification: false
  },

  reducers: {
    setWord: (state, action) => {
      state.word = action.payload
    },
    resetWord: (state, action) => {
      state.word = ''
    },
    wordAdd: (state, action) => {
      state.data.push(action.payload)
    },
    setNotifications: (state, action) => {
      state.notifications.push(action.payload)
    },
    setShowNotification: (state, action) => {
      state.showNotification = action.payload
    },
    resetNotifications: (state, action) => {
      state.notifications = []
    }
  }
});

export const {
  setWord,
  resetWord,
  wordAdd,
  setNotifications,
  resetNotifications,
  setShowNotification
} = words.actions;
export default words.reducer;
