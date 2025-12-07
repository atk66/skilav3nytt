import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>1. Spurning</h2>
        <ul>
            <li>svar</li>
            <li>svar</li>
            <li>svar</li>
            <li>svar</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>

    </div>
  )
}

export default Quiz