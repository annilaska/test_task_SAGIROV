import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Main from './components/main/main';
import Technology from './components/technology/technology';
import FlightSchedule from './components/flightSchedule/flightSchedule';
import Guarantees from './components/guarantees/guarantees';
import AboutCompany from './components/aboutTheCompany/aboutCompany';
import Contacts from './components/contacts/contacts';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppDiv"></div>
          <Header />

            <Routes>
              <Route path='/' element={<Main/>} />
                
              <Route path='/technologyPage' element={<Technology />} />

              <Route path='/flightSchedulePage' element={<FlightSchedule />} />

              <Route path='/guaranteesPage' element={<Guarantees />} />

              <Route path='/aboutCompanyPage' element={<AboutCompany />} />

              <Route path='/contacts' element={<Contacts />} />
            </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
