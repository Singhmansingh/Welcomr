import EventCard from "./EventCard";

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
  return (
    <div className="card-section">
      <h2>{props.sectionName}</h2>
      {props.cards.map((card) => {
        return (
          <EventCard
            key={props.sectionName + "_" + card.id}
            id={card.id}
            ratings={card.ratings}
            name={card.name}
            price={card.price}
          />
        );
      })}
    </div>
  );
};

export default EventSection;
