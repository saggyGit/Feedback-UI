import React,{ useState } from 'react';
import { useContext } from 'react';
import { FaTimes ,FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
const FeedbackItem = (props) => {

    const {deleteHandler ,getEditID} =useContext(FeedbackContext)  


    return (
        <>
      
            
            <Card >
            <div className="num-display">{ props.feedback.rating }</div>
            <button onClick={()=>getEditID(props.feedback)} className="edit">
                <FaEdit color='purple'/>
            </button>
            <button onClick={() => deleteHandler(props.feedback.id)} className="close">
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{ props.feedback.text }</div>
            </Card>

        </>
         

      
            
    );
};

export default FeedbackItem;