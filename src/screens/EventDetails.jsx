import Ticker from '../components/Ticker';
import './EventDetails.css';

export default function EventDetails(){
    return (
    <div id="EventDetails">
        <div className="details-heading" style={{backgroundImage:`url(src/assets/event_picture.png)`}}>
            <div className="event-name">
                <div className="heading">
                <h1>Bollywood Blackout Night</h1>
                <span className="txt-sm rating">⭐4.5</span>

                </div>
                <div className="txt-sm price shadow">$49.99</div>
            </div>
            <p className="txt-sm following">👯‍♀️ 226 People have saved this event!</p>
            <div className="owner-details shadow">
                <div className="owner">
                <h2>By <strong>Toronto Bollywood Club</strong></h2>
                <p className="txt-sm"><strong>15,678 Followers</strong></p>

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
                    {/* Date & Location */}
                </div>
            </section>
            <section>
                <h2>Map & Directions</h2>
                <div className="map shadow">🗺 Google Map API</div>
            </section>
            <section>
                <h2>Accessibility & Accommodations</h2>
                <div className="accessibility-grid">
                    <div>♿ Wheelchair Accessible</div>
                    <div>🖖 Sign-Language</div>
                    <div>🦯 Vision Assistance</div>
                    <div>🅿 Accessible Parking</div>
                    <div>🚻 Accessible Washrooms</div>
                    <div>♿ Reserved Seating</div>

                </div>
            </section>
            <section>
                <h2>Ticket Price & Selection</h2>
                <form>
                    <div class="ticket-row">
                        <label><strong>General Admission</strong> (13-64)</label>
                        <p>$34.99</p>
                        <Ticker/>

                    </div>
                    <div class="ticket-row">
                        <label><strong>Children Ticket</strong> (6-12)</label>
                        <p>$29.99</p>
                        <Ticker/>
                    </div>
                    <div class="ticket-row">
                        <label><strong>Senior Ticket</strong> (65+)</label>
                        <p>$24.99</p>
                        <Ticker/>

                    </div>
                </form>

            </section>
            <section>
                <h2>Event Reviews</h2>
                <div className="reviews-container">
                    {/* Turn this into a component if needed */}
                    <div className="review">
                        <h3>Radhika Sharma, Toronto</h3>
                        <span>⭐⭐⭐⭐</span>
                        <p>"The Bollywood Blackout night event was super fun! The music was great, the atmosphere was lively, and the dance floor was packed. I wish there were more traditional Bollywood songs played instead of just the latest remixes. Overall, a great night out!"</p>
                    </div>
                    <div className="review">
                        <h3>Harpreet Singh, Toronto</h3>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>"I had a blast at the Bollywood Blackout night event. The energy was high, and everyone was having a great time. Bar lines were pretty long with pricey drinks. Waiting for the next Bollywood Blackout Night to attend!"</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Refund Policy</h2>
                <p><em>Please note that ticket purchases on the following event is not subject to refunds. All purchases are final. </em></p>
            </section>
        </div>
    </div>
    )
}