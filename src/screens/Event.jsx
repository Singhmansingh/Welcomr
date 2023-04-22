import EventSection from "../components/EventSection";
import Arrow from "../assets/event/arrow.png";
import "./Event.css";

const eventData = {
  sections: [
    {
      sectionName: "Upcoming",
      cards: [
        {
          id: 2101,
          ratings: "4.7",
          name: "Bollywood Blackout",
          price: "$24.99",
        },
        {
          id: 2102,
          ratings: "4.2",
          name: "Diwali Enchantment",
          price: "$34.99",
        },
        {
          id: 2103,
          ratings: "4.4",
          name: "Colourful Holi Carnival",
          price: "$25.99",
        },
        {
          id: 2104,
          ratings: "3.8",
          name: "Urban Desi Spring Fest",
          price: "$34.99",
        },
      ],
    },
    {
      sectionName: "Popular Picks",
      cards: [
        {
          id: 2201,
          ratings: "4.4",
          name: "Dance of the Nine Nights",
          price: "$19.99",
        },
        {
          id: 2202,
          ratings: "4.7",
          name: "Bhangra Vibes",
          price: "$24.99",
        },
        {
          id: 2203,
          ratings: "4.6",
          name: "Vaisakhi Mela",
          price: "$34.99",
        },
        {
          id: 2204,
          ratings: "4.5",
          name: "Maha Shivratri Celebrations",
          price: "$25.99",
        },
      ],
    },
    {
      sectionName: "Dance Events",
      cards: [
        {
          id: 2301,
          ratings: "4.9",
          name: "Classic Dance Showcase",
          price: "$37.99",
        },
        {
          id: 2302,
          ratings: "4.2",
          name: "Bharatanatyam Bonanza",
          price: "$29.99",
        },
        {
          id: 2303,
          ratings: "4.7",
          name: "Garba Getdown",
          price: "$37.99",
        },
        {
          id: 2304,
          ratings: "4.4",
          name: "Punjabi BASH",
          price: "$29.99",
        },
      ],
    },
  ],
};

const Event = () => {
  return (
    <div className="event-page">
      <div className="back">
        <a href="/">
          <img className="backBtnImg" src={Arrow} alt="back button" />
        </a>
        <p className="backBtn">Back to Community Homepage</p>
      </div>
      <div>
        {eventData.sections.map((e) => {
          return (
            <EventSection
              key={e.sectionName + e.cards.id}
              sectionName={e.sectionName}
              cards={e.cards}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Event;
