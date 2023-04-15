export default function AccessibilityTag(props){
    const ICON = props.acc.icon;
    const TITLE = props.acc.title;
    return (
        <div className="acc-tag">
            <span className="icon">{ICON}</span>
            <span className="acc-text">{TITLE}</span>
        </div>
    )
}