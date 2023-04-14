export default function AccessibilityTag(props){
    const ICON = props.acc.icon;
    const TITLE = props.acc.title;
    return (
        <div class="acc-tag">
            <span class="icon">{ICON}</span>
            <span class="acc-text">{TITLE}</span>
        </div>
    )
}