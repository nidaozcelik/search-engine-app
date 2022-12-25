import { configureStore } from "@reduxjs/toolkit"
import wordsReducer from "../features/words-slice"

export const store = configureStore({
  reducer: {
    words: wordsReducer,
  }
})