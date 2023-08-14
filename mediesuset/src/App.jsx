import { Route, Routes } from "react-router-dom";
import { Tickets } from "./Components/Pages/tickets";
import { Eventslineup } from "./Components/Pages/events_lineup";
import { Eventsprogram } from "./Components/Pages/events_program";
import { Frontpage } from "./Components/Pages/frontpage";
import { Login } from "./Components/Pages/login";


function App() {
  return (
    <>

    <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path='/eventlineup' element={<Eventslineup />} />
        <Route path='/eventprogram' element={<Eventsprogram />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tickets' element={<Tickets />} />
    </Routes>
    
    
    </>
  );
}

export default App;
