/*
Props: {
    name: string,
    date: string
}
*/
const BriefItem = (props) => {
    return (
      <div className="brief-item" style={{backgroundImage:`url(src/assets/community-events/${props.id}.png)`}}>
        <div className="brief-item-text">
          <h3>{props.name}</h3>
          <p className="dot"> {props.date? '\u00B7': ""}</p>
          <p>{props.date? props.date: ""}</p>
        </div>
        <button>View</button>
      </div>
    );
  };
  
  export default BriefItem;