import {Routes , Route} from 'react-router-dom';
import {Home} from '../Components/Home';
import {Admin} from '../Components/Admin';
import {Login} from '../Components/Login';
import {Detail} from '../Components/Details';
import {Nav} from '../Components/Nav';
import {Create} from '../Components/Create'


export const AllRoutes = () =>{
    return (
        <>
          <Nav />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/details/:id" element={<Detail/>}/>
              <Route path="/create" element={<Create/>} />
          </Routes>
        
        </>
    )
}