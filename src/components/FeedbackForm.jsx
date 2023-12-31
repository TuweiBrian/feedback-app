import { useState } from "react"
import Card from "./share/Card"
import Button from "./share/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {
    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

    const handleTextChange = (e) =>{
        // console.log(e.target.value)
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be atleast 10 characters')
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text:text,
                rating:rating
            }
            // console.log(newFeedback)
            handleAdd(newFeedback)
            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us</h2>  
          <RatingSelect select={(rating)=> setRating(rating)}/>
          <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder='write a review' value={text} />
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
