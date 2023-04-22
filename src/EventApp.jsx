import { Outlet } from 'react-router-dom'
import './App.css'
import { PurchaseFooter } from './components/PurchaseFooter';
import FloatingHeader from './components/FloatingHeader';

function EventApp() {
  return (
    <div style={{position: 'relative', fontSize:'0.7em' }}>
      <FloatingHeader/>
      <Outlet/>
        <PurchaseFooter/>

    </div>
  )
}

export default EventApp
