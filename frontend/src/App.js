import './App.css';
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import Header from './component/header/header';
import GetAllData from './component/data/GetAllData';
import Savedata from './component/savdata/Savedata'
import NotFound from './component/NotFound';
import UpdateData from './component/updateData/UpdateData';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Savedata />}/>
      <Route path="/data" element={<GetAllData />}/>
      <Route path="/update/:id" element={<UpdateData />}/>
      <Route path='*'
          element={ window.location.pathname === "/process/payment" ? null : 
            <NotFound/>
          }
      />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
