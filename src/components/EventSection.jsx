import { useContext } from "react";
import EventCard from "./EventCard";
import { EventContext } from "../contexts/EventContext";

/*
Props: {
  sectionName: string,
  cards[] : {
    id: number,
    ratings: string,
    name: string,
    price: string,
  }
}
*/

const EventSection = (props) => {

  // using a global event context for consistancy
  const EVENT = useContext(EventContext)
  return (
    <div>
      <h2 className="sectionName">{props.sectionName}</h2>
      <div className="card-section">
        {props.cards.map((card) => {
          return (
            <EventCard
              key={props.sectionName + "_" + card.id}
              id={card.id}
              ratings={card.ratings}
              name={card.name}
              price={card.useContext ? EVENT.event_tickets[0].price :  card.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventSection;
