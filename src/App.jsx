import { Outlet } from 'react-router-dom'
import './App.css'

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="content">
        {/* children component will replance the <Outlet/> when their path is used */ }
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
