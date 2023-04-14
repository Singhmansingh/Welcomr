import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css'

import App from './App'
import EventDetails from './screens/EventDetails';


// Based on https://reactrouter.com/en/main/start/tutorial

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    
    // Place app screens here
    children:[
      {
        path:"/",
        element:<h1>Wayfinding Homepage</h1>
      },
      {
        path: "eventDetails",
        element: <EventDetails/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
