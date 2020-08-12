import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';


function Rating({StarS}) {
    const [rating,setRating]=useState(0)
    const onStarClick=(nextValue,preValue,name)=>{
    setRating(nextValue);
     StarS(nextValue)
    }


    return (
        <div>
         <StarRatingComponent starCount={5}  value={rating} onStarClick={onStarClick}/>

        </div>
    )
}
export default Rating