import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

export const wordApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `/`
  }),
  endpoints: (builder) => ({
    getWord: builder.query({
      query: (word) => `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    }),
  })
})

export const {
  useGetWordQuery,
} = wordApi