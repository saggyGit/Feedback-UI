import React,{useState ,useContext, useEffect} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import{v4} from 'uuid'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {

    const {newFeedback , FeedbackEdit ,updateHandler } =useContext(FeedbackContext)




 


    const[ text , setText ] = useState('')
    const [btnDisabled ,setBtnDisabled] = useState(true)
    const [msg , setMassage] = useState('')
    const [version , setVersion] = useState('primary')
    const [rating ,setRating] =useState(10);




    //useEffect to edit feedback
    useEffect (()=>{

        if(FeedbackEdit.edit==true)
        {
            setText(FeedbackEdit.item.text)
            setBtnDisabled(false)
            setRating(FeedbackEdit.item.rating)
        }
    
    },[FeedbackEdit])


const handleChange = (e) =>{
    setText(e.target.value)

    if(text === '')
    {
        btnDisabled(true)
        setMassage(null)
    }
    else if(text !== '' && text.length <=10)
    {
        setMassage("review must be greather")
        setVersion('secondary')
        btnDisabled(true)
    }
    else {
        setMassage(null)
        setBtnDisabled(false)
    }

}

    const submitHandler=(e)=>{
        e.preventDefault()

        if(text.trim().length>=10)
        {
          const id=v4()

            const feedbackObj={
                id,
                rating,
                text


            }

            if(FeedbackEdit.edit ==true)
            {
                updateHandler(FeedbackEdit.item.id , feedbackObj)
            }
            else{
                newFeedback(feedbackObj)
                setText('')
                setRating(10)
            }

            
        }
    }


    //function to get rating

    const getSelected=(selected)=>{
        setRating(selected)
    }

   
    return (
        <>

        <Card>

            <form onSubmit={submitHandler}>

                <h2>How would you rate us</h2>
                <RatingSelect getSelected={getSelected}  />
                <div className="input-group">
                    <input type="text" placeholder='write a review' onChange={(e)=>handleChange(e)}  value={text}/>
                    <Button type={'submit'}   isDisabled={btnDisabled} version={version}>Send</Button>
                </div>
                {
                    msg  && <div className="message">{msg}</div>          
                          }
            </form>

        
        </Card>
            
        </>
    );
};

export default FeedbackForm;