import react from  'react'
import { FaRoad } from 'react-icons/fa'
import FeedbackItem from './FeedbackItem'
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from "react"
import FeedbackContext from '../context/FeedbackContext'



const FeedbackList =()=>{

    const {Feedback} =useContext(FeedbackContext)


    //this function is for getting id from FeedbackItem component
   





 if( !Feedback || Feedback.length == 0)
 {
    return(
        <>
        <div>no feedback</div>
        </>
    )
 }
 else{
    return(
        <>
        <div className='feedback-list'>
            <AnimatePresence>
            {
                Feedback.map((row ,index)=>{
                    return(
                        <>
                        <motion.div key={index} 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        >
                        <FeedbackItem feedback ={row}   />
                        </motion.div>
                        </>
                    )
                })
            } 
            </AnimatePresence>
        </div>
        </>
    )

 }

  
}
export default FeedbackList