import CommunitySection from "../components/CommunitySection";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Home.css";

const communityData = {
  id: 1001,
  communityName: "Indian Community",
  description: "Short Description",
  sections: [{
    sectionName: "Global Events",
    sectionShort: "Events",
    items: [{
      id: 1001,
      name: "Event Name1",
      date: "Date of event"
    },
    {
      id: 1002,
      name: "Event Name2",
      date: "Date of event"
    }]
  }, {
    sectionName: "Restaurants",
    sectionShort: "Restaurants",
    items: [{
      id: 2001,
      name: "Restaurant Name 1"
    },
    {
      id: 2002,
      name: "Restaurant Name 2"
    }]
  }, {
    sectionName: "Grocery stores",
    sectionShort: "Stores",
    items: [{
      id: 3001,
      name: "Store Name 1",
    },
    {
      id: 3002,
      name: "Store Name 2",
    }]
  }]
}

const Home = () => {
  return (
    <div>
    <Header/>
    <main className="community">
      <div className="community-main" style={{backgroundImage:`url(src/assets/community/${communityData.id}.png)`}}>
        <h1>Welcome to the {communityData.communityName}</h1>
        <p>{communityData.description}</p>
      </div>
      {
        communityData.sections.map( s => {
          return <CommunitySection key={communityData.communityName+"_"+s.id} sectionName={s.sectionName} sectionShort={s.sectionShort} items={s.items}/>
        })
      }
    </main>
    <Footer/>
    </div>
  );
};

export default Home;