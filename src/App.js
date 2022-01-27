import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom" ; 
import Login from './Login';
import { Checkout } from './Checkout';
import { auth } from "./firebase" ;
import { useStateValue } from "./Stateprovider" ;
import { useEffect } from "react" ; 
import Payment from "./Payment" ;
import { loadStripe } from "@stripe/stripe-js" ;
import  { Elements } from "@stripe/react-stripe-js" ;

const promise = loadStripe("pk_test_51KIh8vHrqMirZgOE8FSScFzUALLHRXluUszKoWS19NfurWM9ugcpTiowNsSFrEojHEyTiWtrp2v4kmnGtqW8boGw00kKjanZiB") ;
function App() {
  const [{} , dispatch] = useStateValue() ; 
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
          if(authUser) {
            dispatch({
              type : "SET_USER" , 
              user : authUser
            })
          }else {
              dispatch({
                type : "SET_USER" , 
                user : null 
              })
          }
      })
  } , [])
  return (
    <Router>
      <div className="app"> 
        <Routes>
            <Route exact path="/checkout" element={<><Header/> <Checkout /></>}/>
            <Route exact path="/" element={<><Header/><Home/></>}/>
            <Route exact path="/login" element={<><Login/></>}/>
            <Route exact path="/payment" element={<><Elements stripe={promise}><Payment/></Elements></>}/>
          </Routes>  
            
     </div>
    </Router>
  );
}

export default App;
