import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css'

import { createContext } from 'react';

import App from './App'
import Home from './screens/Home';
import EventDetails from './screens/EventDetails';
import EventApp from './EventApp';
import Event from './screens/Event';

import { EventContext } from './contexts/EventContext';

// Based on https://reactrouter.com/en/main/start/tutorial

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



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    // Place app screens here
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event",
        element: <Event />,
      },
    ],
  },
  {
    path:'/eventDetails',
    element: <EventApp/>,
    children:[
      {
        path:"/eventDetails",
        element: <EventDetails/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventContext.Provider value={EVENT}>
      <RouterProvider router={router} />
    </EventContext.Provider>
  </React.StrictMode>
);
