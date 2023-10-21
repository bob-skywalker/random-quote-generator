import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='wrapper'>
        <div className='quote-box'>
          <div className='quote-text'>Life is what we make it, always has been, always will be. </div>
          <div className='quote-author'> - Grandma Moses </div>
          <div className='buttons'>
            <a className='button' target='_blank' href='https://www.google.com'>Button 1</a>
            <a className='button' target='_blank'  href='https://www.google.com'>Button 2</a>
            <a className='button' target='_blank' href='https://www.google.com'>Button 3</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
