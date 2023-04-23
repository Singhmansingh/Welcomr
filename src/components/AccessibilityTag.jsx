import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faWheelchairMove, faHandsAslInterpreting,
    faPersonWalkingWithCane, faParking,
    faUniversalAccess, faWheelchair,
} from '@fortawesome/free-solid-svg-icons';
export default function AccessibilityTag(props){
    var icon;
    const TITLE = props.acc.title;

    switch(props.acc.icon){
        case 'faParking': icon = faParking; break;
        case 'faWheelchair': icon = faWheelchair; break;
        case 'faWheelchairMove': icon = faWheelchairMove; break;
        case 'faUniversalAccess': icon = faUniversalAccess; break;
        case 'faHandsAslInterpreting': icon = faHandsAslInterpreting; break;
        case 'faPersonWalkingWithCane': icon = faPersonWalkingWithCane; break;
    }


    return (
        <div className="acc-tag">
            <span className="icon"><FontAwesomeIcon icon={icon}/></span>
            <span className="acc-text">{TITLE}</span>
        </div>
    )
}