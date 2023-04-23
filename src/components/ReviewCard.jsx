import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

export default function ReviewCard(props){
    function stars(){
        let stars = [];
        for(let x=0;x<5;x++){
            if(x < props.review.rating)
            {
                stars.push(<FontAwesomeIcon icon={faStar}/>);
            }
            else {
                stars.push(<FontAwesomeIcon icon={emptyStar}/>);
            }
        }
        return (stars.map((star,index) => <span key={'star_'+index}>{star}</span>));
    }
    return(
        <div className="review shadow">
        <h3>{props.review.username}, {props.review.city}</h3>
        <span className="star-container">{ stars() }</span>
        <p>"{props.review.message}"</p>
        </div>
    )
}