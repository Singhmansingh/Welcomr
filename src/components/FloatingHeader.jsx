import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import TimeBar from "./TimeBar"

export default function FloatingHeader() {

    /**
     * FontAwesome used:
     * chevron-left
     * share-nodes
     * 
     */
    return (
        <div className="floating-header">
            <TimeBar/>
            <div className="event-header">
                <a href="/Event" className="icon fs va shadow">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </a>
                <p className="fg va text-shadow">Bollywood Blackout Night</p>

                <div className="icon fs va shadow">
                <FontAwesomeIcon icon={faShareNodes} />
                </div>
            </div>
          
        </div>

    )
}