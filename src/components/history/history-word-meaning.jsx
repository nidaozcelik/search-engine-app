import React, { useEffect, useState } from 'react'
import { useGetWordQuery } from '../../features'

const HistoryWordMeaning = ({ word }) => {
  const [decorateData, setDecorateData] = useState(null)
  const { currentData: data, } = useGetWordQuery(word, { skip: !word })

  useEffect(() => {
    if (data) {
      setDecorateData(data[0].meanings[0].definitions)
    }
  }, [data])

  return <>
    {(decorateData || []).slice(0, 2).map(data => {
      return data.definition
    })
    }
  </>
}

export default HistoryWordMeaning