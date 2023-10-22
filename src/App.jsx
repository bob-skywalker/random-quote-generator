import { useState } from 'react'
import './assets/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='wrapper'>
        <div className='quote-box'>
          <div className='quote-text'>
            <i className='fa fa-quote-left'> </i>
            <span id='text'> If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</span>
          </div>
          <div className='quote-author'> - Grandma Moses </div>
          <div className='buttons'>
            <a className='button1' id='main_buttons' target='_blank' href='https://www.google.com'>
              <i class="fa fa-twitter"></i>
            </a>
            <a className='button2' id='main_buttons' target='_blank'  href='https://www.google.com'>
            <i class="fa fa-tumblr"></i>
            </a>
            <button className='button3'>New Quote </button>
          </div>
        </div>
      </div>
      <div className="footer">
        by
        <a href="https://www.bozhong-app.com">  Bo Z</a>
      </div>
    </>
  )
}

export default App
