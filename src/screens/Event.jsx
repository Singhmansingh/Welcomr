import EventSection from "../components/EventSection";

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
      ],
    },
  ],
};

const Event = () => {
  return (
    <div>
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
