import { Outlet } from 'react-router-dom'
import './App.css'
import { PurchaseFooter } from './components/PurchaseFooter';


function EventApp() {
  return (
    <div style={{position: 'relative', fontSize:'0.7em' }}>
      <Outlet/>
        <PurchaseFooter/>

    </div>
  )
}

export default EventApp
