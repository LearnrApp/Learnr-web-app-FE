import React, {useState} from 'react'


const FaqItem = (question) => {
  return (
    <React.Fragment>
      <div className="bg-white p-3 d-flex align-items-center justify-content-between mb-3">
        <span>{question.question}</span>
        <div className="">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 6L10 0H0L5 6Z" fill="#999999"/>
          </svg>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FaqItem