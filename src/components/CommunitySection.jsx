import BriefItem from "./BriefItem";

/*
Props: {
  id: number,
  sectionName: string,
  sectionShort: string
  items[] : {
    id: number,
    name: string,
    date: string
  }
}
*/

const CommunitySection = (props) => {
    return (
      <div className="community-section">
        <h2>{props.sectionName + " in this community" }</h2>
        {props.items.map(i => {
            return <BriefItem key={props.sectionName+"_"+i.id} id={i.id} name={i.name} date={i.date}/>
        })}
        <button>{"More " + props.sectionShort}</button>
      </div>
    );
  };
  
  export default CommunitySection;