import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Row from './component/Row'
import { rows } from './helpers'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      {rows.map(row => (
        <Row 
        key={row.id} 
        title={row.title} 
        fetchURL={row.fetchURL} 
        id={row.id} />
      ))}
    </>
  )
}

export default App
