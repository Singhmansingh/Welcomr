import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">

      <header class="header">Header Stuff</header>

      <main class="content">

        {/* children component will replance the <Outlet/> when their path is used */ }

        <Outlet/>

      </main>

      <footer class="navbar">Navbar Stuff</footer>
      
    </div>
  )
}

export default App
