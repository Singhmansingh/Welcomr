export function EventInfoCard(props){
    return(
        <div class="event-info-card">
            <div class="icon-box-container">
            <div class="icon-box shadow">
                <span class="icon">{props.icon}</span>
            </div>
            </div>

            <div class="event-info-content">
                <h3>{props.type}</h3>
                <p>{props.title ? <strong>{props.title}</strong> : ''} {props.content}</p>
            </div>
        </div>
    )
}
