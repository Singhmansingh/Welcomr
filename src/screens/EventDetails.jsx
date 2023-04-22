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

export default function EventDetails(){

    function toCommonAddress(locationData){
        return `${locationData.location_address},${locationData.location_city}, ${locationData.location_state_code}, ${locationData.location_postal_code}`

    }

    function Icon(props){
        return ( <FontAwesomeIcon icon={props.i}/> );
    }

    const EVENT = {
        event_id:293949172654,
        event_name:"Bollywood Blackout Night",
        event_general_price: 34.99,
        event_rating:4.5,
        event_thumbnail: "../../assets/event_picture.png",
        event_thumbnail_alt: "A group of people standing on top of a stage.",
        event_description:"Come and experience the dazzling colours and captivating rhythms of Bollywood at our Bollywood Blackout Night! Dance the night away to bhangra, hip-hop, and traditional Indian music and enjoy our selection of tantalizing Indian dishes and drinks to keep you energized all night long. So come out, show off your moves, and join us for this one-of-a-kind Bollywood Blackout Night!",
        event_following: 226,
        event_date: new Date('09-30-2023'),
        event_location: {
            location_id: 2093283,
            location_name: "The Rec Room",
            location_address: "255 Bremner Blvd.",
            location_city:"Toronto",
            location_state_code:"ON",
            location_postal_code:"M5V 3M9"
        },
        event_accessibility:[
            {icon: 'faWheelchairMove',title:"Wheelchair Accessible"},
            {icon: 'faHandsAslInterpreting',title:"Sign-Language"},
            {icon: 'faPersonWalkingWithCane',title:"Vision Assistance"},
            {icon: 'faParking',title:"Accessible Parking"},
            {icon: 'faUniversalAccess',title:"Accessible Washrooms"},
            {icon: 'faWheelchair',title:"Reserved Seating"},
            
        ],
        event_tickets:[
            {
                type:"General Admission",
                demo:"13-64",
                price:34.99
            },
            {
                type:"Child Ticket",
                demo:"6-12",
                price:29.99
            },
            {
                type:"Senior Ticket",
                demo:"65+",
                price:24.99
            },
        ],
        event_organizer:{
            organizer_id:222938231,
            organizer_name:'Toronto Bollywood Club',
            organizer_followers:15678,
            organizer_contactNumber:'(416)-598-3839'
        },
        event_reviews:[
            {
                username:"Radhika Sharma",
                city:"Toronto",
                rating:4,
                message:"The Bollywood Blackout night event was super fun! The music was great, the atmosphere was lively, and the dance floor was packed. I wish there were more traditional Bollywood songs played instead of just the latest remixes. Overall, a great night out!"
            },
            {
                username:"Harpreet Singh",
                city:"Toronto",
                rating:5,
                message:"I had a blast at the Bollywood Blackout night event. The energy was high, and everyone was having a great time. Bar lines were pretty long with pricey drinks. Waiting for the next Bollywood Blackout Night to attend!"
            }
        ]

    }

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

                <div className="txt-sm price shadow">${EVENT.event_general_price}</div>

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