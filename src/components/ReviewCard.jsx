export default function ReviewCard(props){
    function stars(){
        let stars='';
        for(let x=0;x<props.review.rating;x++){
            stars += '⭐';
        }
        return stars;
    }
    return(
        <div className="review shadow">
        <h3>{props.review.username}, {props.review.city}</h3>
        <span>{ stars() }</span>
        <p>"{props.review.message}"</p>
        </div>
    )
}