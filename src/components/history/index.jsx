import React from 'react'
import WordMeaning from './word-meaning'

const History = () => {
  return <div className='history'>
    {
      (JSON.parse(localStorage.getItem('history')) || []).length === 0 ?
        <span className='history-warning'>There is no data to show. Please search for word!</span>
        : <div className='history-accordion'>
          {
            JSON.parse(localStorage.getItem('history')).map((value) => {
              return <div key={value} className='history-accordion-item'>
                <input type='checkbox' id={value} className='history-accordion-input' />
                <label for={value} className='history-accordion-label'>
                  <span>{value.replace(/"/g, "").toUpperCase()}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </label>
                <div class='history-accordion-content'>
                  <WordMeaning word={value.replace(/"/g, "")} />
                </div>
              </div>
            })
          }
        </div>
    }
  </div>
}

export default History