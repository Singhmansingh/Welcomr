export function EventInfoCard(props){
    return(
        <div className="event-info-card">
            <div className="icon-box-container">
            <div className="icon-box shadow">
                <span className="icon">{props.icon}</span>
            </div>
            </div>

            <div className="event-info-content">
                <h3 tabIndex={0}>{props.type}</h3>
                <p>{props.title ? <strong>{props.title}</strong> : ''} {props.content}</p>
            </div>
        </div>
    )
}
