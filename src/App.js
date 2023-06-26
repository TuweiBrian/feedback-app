import { useState } from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './components/pages/About'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'


function App() {
  const [feedback,setFeedback] = useState(FeedbackData)
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) => {
    // console.log(id)
    if(window.confirm('Are you sure')){
      setFeedback(feedback.filter((item) => item.id !== id))

    }
  }
  return (
    <Router>
        <Header />
        <div className='container'>
            <Routes>
              <Route exact path="/" element ={
                <>
                <FeedbackForm handleAdd ={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handelDelete={deleteFeedback}/>
                </>
              } />
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/post/:id" element={<Post/>}/>
            </Routes>
            <AboutIconLink />
        </div>
    </Router>

  )
}

export default App
