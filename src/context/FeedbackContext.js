 import { createContext ,useEffect,useState } from "react";
 import FeedbackData  from "./../data/FeedbackData.js"
 import axios from 'axios'


 const FeedbackContext =createContext();





 export const FeedbackContextProvider =({children})=>{

        const [Feedback ,setFeedback] =useState(FeedbackData)
        const [ FeedbackEdit , setFeedbackEdit] = useState({
            item : {},
            edit : false
        })


        useEffect(()=>{

          fetch("http://localhost:5000/feedback")
          
          .then(async(res)=>{

            const data=await res.json()
            setFeedback(data)
          })
          .catch((err)=>{
            console.log(err);

          })

        },[Feedback])




        // function to delete feedback
        const deleteHandler =(id)=>{
            if(window.confirm('do you want to delete?'))
            {
              // setFeedback(Feedback.filter((item)=>{
              //   return(
              //     item.id !== id
                // )
              // }))

              axios.delete(`http://localhost:5000/feedback/${id}`)
              .then((res)=>{

                alert("delete successfully")
              })
              .catch((err)=>{
                alert(err)
              })
            }
          }



          //function to add new feedback to the main array
          const newFeedback=(newFd)=>{
            // setFeedback([...Feedback,newFd])

            axios.post("http://localhost:5000/feedback",newFd)
            .then((res)=>{

              alert("successfully added")
            })
            .catch((err)=>{

              alert(err)
            })
          }



          // function to get item ffrom feedbackItem Component
            function getEditID(item) {
                setFeedbackEdit(
                    {
                    item,
                    edit : true
                }
                )
            }


            //function to update Feedback

            const updateHandler =(id , replacedFeedback) =>{
                // console.log(replacedFeedback)
                // setFeedback(Feedback.map((item)=>{
                //     return(
                //         item.id == id ? {...item , ...replacedFeedback} : item 
                //     )
                // }))

                

                  axios.put(`http://localhost:5000/feedback/${id}`,replacedFeedback)
                  .then((res)=>{

                    alert("updated successfully")
                  })
                  .catch((err)=>{
                    alert(err)
                  })
              


            }


          



    return(
        <FeedbackContext.Provider
        value={{
            Feedback,     //=>FeedbackList
            setFeedback,   //=>FeedbackList
            deleteHandler, //=>FeedbakItem
            newFeedback,    //=>FeedbackForm
            getEditID,
            FeedbackEdit , //=> feedbackForm
            updateHandler

        }}
        >
            {children}
        </FeedbackContext.Provider>
    )
 }

 export default FeedbackContext