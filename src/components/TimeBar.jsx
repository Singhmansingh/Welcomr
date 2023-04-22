import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignal, faWifi, faBatteryFull  } from "@fortawesome/free-solid-svg-icons";

export default function TimeBar(){
    return (
        <div className="fsb timebar" aria-hidden='true'>
            <div className="time">
                <p>19:02</p>
            </div>
            <div className="status">
                <FontAwesomeIcon icon={faSignal}/>
                <FontAwesomeIcon icon={faWifi}/>
                <FontAwesomeIcon icon={faBatteryFull}/>

            </div>
        </div>
    )
}