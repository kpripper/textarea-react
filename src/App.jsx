import { useState } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [submittedMessage, setSubmittedMessage] = useState(null)

  const handleSubmit = () => {
    console.log('handleSubmit, message:', message)
    if (message.trim() !== '') {
      const newMessage = <p>{message}</p>
      setMessage('')
      setSubmittedMessage(newMessage)
    }
  }

  return (
    <>

      <div className="card">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button aria-label="Submit" onClick={handleSubmit}>
          Submit
        </button>
        {submittedMessage}
      </div>

    </>
  )
}

export default App
