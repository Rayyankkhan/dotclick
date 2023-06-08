// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import MainContent from './Components/MainContent';
// import MiddleBar from './Components/MiddleBar';
import SideBar from './Components/SideBar';
import CurrentRequest from './Components/pages/CurrentRequest';
import OngoingStays from './Components/pages/OngoingStays';
import PreviousStays from './Components/pages/PreviousStays';
import Reports from './Components/pages/Reports';


function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar><Routes>
          <Route path='/' element={<CurrentRequest/>}/>
          <Route path='/CurrentRequest' element={<CurrentRequest/>}/>
          <Route path='/OngoingRequest' element={<OngoingStays/>}/>
          <Route path='/PreviousStays' element={<PreviousStays/>}/>
          <Route path='/Reports' element={<Reports/>}/>
           
        </Routes>
        </SideBar>
      </BrowserRouter>
    </>
  );
}

export default App;
