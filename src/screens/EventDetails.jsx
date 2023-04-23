import AccessibilityTag from '../components/AccessibilityTag';
import { EventInfoCard } from '../components/EventInfoCard';
import { PurchaseFooter } from '../components/PurchaseFooter';
import ReviewCard from '../components/ReviewCard';
import Ticker from '../components/Ticker';
import './EventDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faStar , faUsers, faLocationDot, 
    faPhone,
  } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import { EventContext } from '../contexts/EventContext';

export default function EventDetails(){

    function toCommonAddress(locationData){
        return `${locationData.location_address},${locationData.location_city}, ${locationData.location_state_code}, ${locationData.location_postal_code}`

    }

    function Icon(props){
        return ( <FontAwesomeIcon icon={props.i}/> );
    }

    const EVENT = useContext(EventContext);
    

    const accessibility = EVENT.event_accessibility;
    const tickets=EVENT.event_tickets;
    const reviews=EVENT.event_reviews;

    const organizer=EVENT.event_organizer;
    const dateDetails="Sat. Sept. 30th, 2023 8:00PM EST";
    const locationDetails= toCommonAddress(EVENT.event_location);
    const locationName=EVENT.event_location.location_name;

    const format = (value) => Intl.NumberFormat('en-US').format(value);

    return (
    <main id="EventDetails">

        {/* HEADING */}

        <div className="details-heading" style={{backgroundImage:`linear-gradient(#ffffff00 95%, #fff ), url(${EVENT.event_thumbnail})`}}>
            <div className="event-name">

                {/* Event Name */}

                <div className="heading">
                    <h1>{EVENT.event_name}</h1>
                    <span className="txt-sm rating"><Icon i={faStar}/> {EVENT.event_rating} <span style={{fontSize:0}}>stars</span></span>
                </div>
                
                {/* Event Price */}

                <div className="txt-sm price shadow">${EVENT.event_tickets[0].price}</div>

            </div>

            {/* Event Following */}

            <p className="txt-sm following"><Icon i={faUsers}/> {format(EVENT.event_following)} People have saved this event!</p>

             {/* Event Organizer */}

            <div className="owner-details shadow">
                <div className="owner">
                    <h2>By <strong>{organizer.organizer_name}</strong></h2>
                    <p className="txt-sm"><strong>{format(organizer.organizer_followers)} Followers</strong></p>
                </div>

                <div className="follow">
                    <button aria-label={"click to follow " + organizer.organizer_name} className="btn-small txt-sm follow-btn shadow">Follow</button>
                </div>
            </div>
        </div> 


        <div className="event-body">

            {/* DESCRIPTION */}

            <section>
                <h2 tabIndex={0}>Event Description</h2>
                <p>{EVENT.event_description}</p>
            </section>


            {/* LOCATION & TIME */}


            <section>
                <h2 tabIndex={0}>When and Where</h2>
                <div className="columns">
                    <EventInfoCard icon={<Icon i={faCalendarCheck}/>} type="Date & Time" content={dateDetails} />
                    <EventInfoCard icon={<Icon i={faLocationDot}/>} type="Location" content={locationDetails} title={locationName} />
                </div>
            </section>
            <section>
                <h2>Map & Directions</h2>
                <div className="map shadow"><img src="assets/event-details/map.jpg" alt={'Google map view of ' + EVENT.event_location.location_name}/></div>
            </section>


            {/* ACCESSIBILITY */}


            <section>
                <h2 tabIndex={0}>Accessibility & Accommodations</h2>
                <div className="accessibility-grid">
                    {
                        accessibility.map((acc,index)=> <AccessibilityTag key={'acc_tag_' + index} acc={acc}/>)
                    }
                    
                </div>
                <h3 className="h3-small">For More Information on Acessibility Services:</h3>
                <p className="txt-sm"><span className="icon"><Icon i={faPhone}/></span> Please call <span style={{fontSize:0}}>{organizer.organizer_name}</span><a aria-label="organizer's phone number"  href={'phone:'+organizer.organizer_contactNumber}>{organizer.organizer_contactNumber}</a></p>
            </section>

            {/* TICKET PURCHASE */}


            <section id="tickets">
                <h2 tabIndex={0}>Ticket Price & Selection</h2>
                <form>
                    {
                        tickets.map((ticket,index)=>{
                            return(
                            <div className="ticket-row" key={'ticket_type_' + index}>
                                <label htmlFor={'ticket_' + index}><strong>{ticket.type}</strong> ({ticket.demo}) <span style={{fontSize: 0}}>${ticket.price}</span></label>
                                <p aria-hidden='true'>${ticket.price}</p>
                                <Ticker id={"ticket_"+index} name={"ticket_"+index} tickerFor={ticket.type}/>
                            </div>
                            )
                        })
                    }
                </form>

            </section>

            {/* REVIEWS */}

            <section >
                <h2 tabIndex={0}>Event Reviews</h2>
                <div className="reviews-container no-padding">
                    {
                        reviews.map((review,index) => <ReviewCard key={'review_'+index} review={review}/>)
                    }
                </div>
            </section>

            {/* POLICIES */}

            <section>
                <h2>Refund Policy</h2>
                <p className="italics">Please note that ticket purchases on the following event is not subject to refunds. All purchases are final.</p>
            </section>
        </div>
    </main>
    )
}