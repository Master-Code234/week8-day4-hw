import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-bar">
     <div className="nav-item-1"><Link to="/" > Home </Link>  </div> 
     <div className="nav-item-2" ><Link to="/dashboard">  Stocks </Link> </div>
     <div  className="nav-item-3" ><Link to="/about">About </Link> </div>
   </div>
   
  );
  
}
