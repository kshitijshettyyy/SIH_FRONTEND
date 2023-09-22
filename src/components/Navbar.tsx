import { Link } from "react-router-dom";
function Navbar(){
    return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/explore">Explore</Link>
                    </li>
                </ul>
                {/* <form className="container-fluid justify-content-end"> */}
                    <Link to="/login" className="btn btn-outline-success me-2" type="button" >Log In</Link>
                    <Link to="/register" className="btn btn-outline-secondary" type="button">Sign Up</Link>
                {/* </form> */}
                </div>
            </div>
        </nav>
    </div>)
}
export default Navbar;