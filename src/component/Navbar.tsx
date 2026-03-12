import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className="px-4 navbar navbar-expand-lg navbar-dark bg-dark">
        
            <Link className="navbar-brand" to="/">Justin Whitfield</Link>  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
                <span className="navbar-toggler-icon"></span>
            </button>
            
                <div className="collapse navbar-collapse" id="navbarMain">
                    <div className="navbar-nav ms-auto">
                        <a href="https://github.com/gwhitfi" className="nav-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <Link className="nav-link" to="/blog">Personal Blog</Link>
                        <Link className="nav-link" to="/resume">Resume</Link>
                    </div>
            </div>
        
    </nav>)
}

export default Navbar;
