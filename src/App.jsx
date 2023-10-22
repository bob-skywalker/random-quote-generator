import { useState } from 'react'
import { useEffect } from 'react';
import './assets/App.css'

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = () => {
    fetch('https://api.quotable.io/random?maxLength=200')
      .then(res => res.json())
      .then(data => {
          setQuote(data.content)
          setAuthor(data.author)
          })
      .then(() => setLoading(false))
      .catch((err) => {
        console.log("Error fetching the quotes:", err);
        setLoading(false)
      })
  }

  useEffect(fetchQuotes,[])


  return (
    <>
      <div id='wrapper'>
        <div className='quote-box'>
          <div className='quote-text'>
            <i className='fa fa-quote-left'> </i>
            <span id='text'>{quote}</span>
          </div>
          <div className='quote-author'> - {author} </div>
          <div className='buttons'>
            <a className='button1' id='main_buttons' target='_blank' href='https://www.google.com'>
              <i class="fa fa-twitter"></i>
            </a>
            <a className='button2' id='main_buttons' target='_blank'  href='https://www.google.com'>
            <i class="fa fa-tumblr"></i>
            </a>
            <button className='button3' onClick={fetchQuotes}>New Quote </button>
          </div>
        </div>
      </div>
      <div className="footer">
        by
        <a href="https://www.bozhong-app.com">  Bo Z.</a>
      </div>
    </>
  )
}

export default App
