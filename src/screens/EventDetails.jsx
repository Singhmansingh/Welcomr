import AccessibilityTag from '../components/AccessibilityTag';
import { EventInfoCard } from '../components/EventInfoCard';
import { PurchaseFooter } from '../components/PurchaseFooter';
import ReviewCard from '../components/ReviewCard';
import Ticker from '../components/Ticker';
import './EventDetails.css';



export default function EventDetails(){

    const EVENT = {
        event_id:293949172654,
        event_name:"Bollywood Blackout Night",
        event_general_price: 34.99,
        event_rating:4.5,
        event_following: 226,
        event_date: new Date('09-30-2023'),
        event_location: {
            location_id: 2093283,
            location_name: "The Rec Room",
            location_address: "255 Bremner Blvd.",
            location_city:"Toronto",
            location_state_code:"ON",
            location_postal_code:"M5V 3M9",
            location_common_address: function(){
                return `${this.location_address},${this.location_city}, ${this.location_state_code}, ${this.location_postal_code}`
            }
        },
        event_accessibility:[
            {icon: '♿',title:"Wheelchair Accessible"},
            {icon: '🖖',title:"Sign-Language"},
            {icon: '🦯',title:"Vision Assistance"},
            {icon: '🅿',title:"Accessible Parking"},
            {icon: '🚻',title:"Accessible Washrooms"},
            {icon: '♿',title:"Reserved Seating"},
            
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
    const locationDetails=EVENT.event_location.location_common_address();
    const locationName=EVENT.event_location.location_name;

    const format = (value) => Intl.NumberFormat('en-US').format(value);


    const imgUrl = `../../assets/event_picture.png`;

    return (
    <main id="EventDetails">
        <div className="details-heading" style={{backgroundImage:`url(${imgUrl})`}}>
            <div className="event-name">
                <div className="heading">
                <h1>{EVENT.event_name}</h1>
                <span className="txt-sm rating">⭐{EVENT.event_rating}</span>

                </div>
                <div className="txt-sm price shadow">${EVENT.event_general_price}</div>
            </div>
            <p className="txt-sm following">👯‍♀️ {format(EVENT.event_following)} People have saved this event!</p>
            <div className="owner-details shadow">
                <div className="owner">
                <h2>By <strong>{organizer.organizer_name}</strong></h2>
                <p className="txt-sm"><strong>{format(organizer.organizer_followers)} Followers</strong></p>

                </div>
                <div className="follow">
                <button className="btn-small txt-sm follow-btn shadow">Follow</button>
                </div>
            </div>
        </div>
        <div className="event-body">
            <section>
                <h2>Event Description</h2>
                <p>Come and experience the dazzling colours and captivating rhythms of Bollywood at our Bollywood Blackout Night! Dance the night away to bhangra, hip-hop, and traditional Indian music and enjoy our selection of tantalizing Indian dishes and drinks to keep you energized all night long. So come out, show off your moves, and join us for this one-of-a-kind Bollywood Blackout Night! </p>
            </section>
            <section>
                <h2>When and Where</h2>
                <div className="columns">
                    <EventInfoCard icon='🕐' type="Date & Time" content={dateDetails} />
                    <EventInfoCard icon='❗' type="Location" content={locationDetails} title={locationName} />
                </div>
            </section>
            <section>
                <h2>Map & Directions</h2>
                <div className="map shadow">🗺 Google Map API</div>
            </section>
            <section>
                <h2>Accessibility & Accommodations</h2>
                <div className="accessibility-grid">
                    {
                        accessibility.map(acc=> <AccessibilityTag acc={acc}/>)
                    }
                    
                </div>
                <h3 className="h3-small">For More Information on Acessibility Services:</h3>
                <p className="txt-sm"><span className="icon">📞</span> Please call <a href={'phone:'+organizer.contactNumber}>{organizer.contactNumber}</a></p>
            </section>
            <section>
                <h2>Ticket Price & Selection</h2>
                <form>
                    {
                        tickets.map((ticket,index)=>{
                            return(
                            <div className="ticket-row">
                                <label><strong>{ticket.type}</strong> ({ticket.demo})</label>
                                <p>${ticket.price}</p>
                                <Ticker id={"ticket_"+index} name={"ticket_"+index}/>
                            </div>
                            )
                        })
                    }
                </form>

            </section>
            <section >
                <h2>Event Reviews</h2>
                <div className="reviews-container no-padding">
                    {/* Turn this into a component if needed */}
                    {
                        reviews.map(review => <ReviewCard review={review}/>)
                    }
                </div>
            </section>
            <section>
                <h2>Refund Policy</h2>
                <p className="italics">Please note that ticket purchases on the following event is not subject to refunds. All purchases are final.</p>
            </section>
        </div>
    </main>
    )
}