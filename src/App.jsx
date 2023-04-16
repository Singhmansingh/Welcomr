import { Outlet } from 'react-router-dom'
import './App.css'



function App() {
  return (
    <div className="App">
      {/* children component will replance the <Outlet/> when their path is used */ }
      <Outlet/>
    </div>
  )
}

export default App
