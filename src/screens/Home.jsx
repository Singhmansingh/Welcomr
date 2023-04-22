import CommunitySection from "../components/CommunitySection";


import "./Home.css";

const communityData = {
  id: 1001,
  communityName: "Indian Community",
  description: "Discover, connect, and celebrate Indian culture at our online hub for the Indian community. Join us for captivating content, engaging discussions, and a warm, welcoming community.",
  sections: [{
    sectionName: "Global Events",
    sectionShort: "Events",
    items: [{
      id: 1001,
      name: "Bollywood Blackout Night",
      date: '09-30-2023'
    },
    {
      id: 1002,
      name: "Colourful Holi Carnival",
      date: '12-30-2023'
    }]
  }, {
    sectionName: "Restaurants",
    sectionShort: "Restaurants",
    items: [{
      id: 2001,
      name: "Spice Junction"
    },
    {
      id: 2002,
      name: "Tandoori Delights"
    }]
  }, {
    sectionName: "Grocery stores",
    sectionShort: "Stores",
    items: [{
      id: 3001,
      name: "Curry Mart",
    },
    {
      id: 3002,
      name: "Saffron Supermarket",
    }]
  }]
}

const Home = () => {
  const imgUrl = `../../assets/community/${communityData.id}.png`;
  return (
    <div>
    <main className="community">
      <div className="community-main" style={{backgroundImage:`url(${imgUrl})`}}>
        <h1>Welcome to the {communityData.communityName}</h1>
        <p>{communityData.description}</p>
      </div>
      {
        communityData.sections.map( s => {
          return <CommunitySection key={communityData.communityName+"_"+s.sectionName} sectionName={s.sectionName} sectionShort={s.sectionShort} items={s.items}/>
        })
      }
    </main>
    </div>
  );
};

export default Home;