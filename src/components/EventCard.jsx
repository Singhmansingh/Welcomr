/*
Props: {
    name: string,
    ratings: string,
    price: string,
}
*/

import React, { useState } from "react";

const EventCard = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const cardImg = `../../assets/community-events/${props.id}.png`;

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="event-card-wrap">
      <div className="event-card">
        <div className="event-img">
          <img src={cardImg} alt={props.name} width="200" height="130"></img>
        </div>
        <span
          className={`heart ${isLiked ? "active" : ""}`}
          id="heart"
          onClick={handleLikeClick}
        >
          &#9825;
        </span>
        <div className="shadow1"></div>
        <div className="event-ratings">
          &#11088;
          {props.ratings}
        </div>

        <div>
          <a href="/eventDetails" className="event-link">
            <p className="event-name">{props.name}</p>
          </a>
        </div>

        <div>
          <p className="event-price">Price: {props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
