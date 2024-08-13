import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Row from './component/Row';
import { rows } from './helpers';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieCategories from './component/MovieCategories';

// RowData türünü güncelleyin
interface RowData {
  id: string;
  title: string;
  fetchURL: string;
}

function App() {
  const [homePage, setHomePage] = useState(true);

  return (
    <>
      <Navbar />
      {homePage ? (
        <div>
          <Banner />
          {rows.map((row: RowData) => (
            <Row 
              key={row.id} 
              title={row.title} 
              fetchURL={row.fetchURL} 
              setHomePage={setHomePage} // Burada setHomePage prop olarak geçiyor
            />
          ))}
        </div>
      ) : (
        <Routes>
          {rows.map((row: RowData) => (
            <Route 
              key={row.id} 
              path={`/${row.title}`} 
              element={<MovieCategories title={row.title} fetchURL={row.fetchURL} setHomePage={setHomePage} />} // setHomePage burada da geçiyor
            />
          ))}
        </Routes>
      )}
    </>
  );
}

export default App;
