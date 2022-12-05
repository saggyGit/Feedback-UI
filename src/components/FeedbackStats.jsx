import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {


    const {Feedback} = useContext(FeedbackContext)


    //calculate average of rating 

    const averageRating = (Feedback.reduce((acc,current)=>{

        return((acc + current.rating))
    },0)/Feedback.length).toFixed(1).replace(/[.,]0$/,'')





    return (
        <>

        <div className="feedback-stats">
            <h4>{Feedback.length} Reviews</h4>
            <h4>Average Rating:{isNaN(averageRating) ? 0 : averageRating}</h4>

        </div>

        


            
        </>
    );
};

export default FeedbackStats;