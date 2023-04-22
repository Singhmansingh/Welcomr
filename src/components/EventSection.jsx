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
              price={card.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventSection;
