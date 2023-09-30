import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Lastpage from './Components/Lastpage/Lastpage';
import Placeorder from './Components/Placeorder/Placeorder';
import Details from './Components/Details/Details';
import Orders from './Components/Orders/Orders';
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/lastpage' element={<Lastpage/>}></Route>
          <Route path='/placeorder' element={<Placeorder/>}></Route>
          <Route path='/details/:headphoneName' element={<Details />} />
          <Route path='/orders' element={<Orders/>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
