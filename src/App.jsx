import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">

      <main className="content">

        {/* children component will replance the <Outlet/> when their path is used */ }

        <Outlet/>

      </main>
      
    </div>
  )
}

export default App
