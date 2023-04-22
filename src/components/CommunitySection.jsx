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
      <h2>{props.sectionName}</h2>
      {props.items.map((i) => {
        return (
          <BriefItem
            key={props.sectionName + "_" + i.id}
            id={i.id}
            name={i.name}
            date={i.date}
          />
        );
      })}
      <a href="./event">
        <button>{"More " + props.sectionShort}</button>
      </a>
    </div>
  );
};

export default CommunitySection;
