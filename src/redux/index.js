import { configureStore } from "@reduxjs/toolkit"
import wordsReducer from "../features/ui-slice"
import { wordApi } from '../features/api-slice'

export const store = configureStore({
  reducer: {
    words: wordsReducer,
    [wordApi.reducerPath]: wordApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(wordApi.middleware)
})