import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function Index(){
    return(
        <div>
            <Navbar/>
            <h1>homepage</h1>
            <Link to="/getstarted" className="btn btn-success me-2" type="button" >Get Started</Link>
        </div>
    )
}
export default Index;

// homepage/landing page