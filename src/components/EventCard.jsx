/*
Props: {
    name: string,
    ratings: string,
    price: string,
}
*/
const EventCard = (props) => {
  const cardImg = `../../assets/community-events/${props.id}.png`;
  return (
    <div className="event-card-wrap">
      <div className="event-img">
        <img src={cardImg} alt={props.name} width="60" height="50"></img>
      </div>

      <div className="event-ratings">
        <p>&#11088 &#2B50</p>
        {props.ratings}
      </div>

      <div>
        <p>{props.name}</p>
      </div>

      <div>
        <p>Price: </p>
        {props.price}
      </div>
    </div>
  );
};

export default EventCard;
