import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Row from './component/Row';
import { rows } from './helpers';

// Movie ve Row türlerini tanımlıyoruz
interface RowData {
  id: string;
  title: string;
  fetchURL: string;
}

// App bileşenini tanımlıyoruz
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      {rows.map((row: RowData) => (
        <Row 
          key={row.id} 
          title={row.title} 
          fetchURL={row.fetchURL} 
        />
      ))}
    </>
  );
}

export default App;
