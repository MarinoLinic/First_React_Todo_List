import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1><Link to="/">Marino's First React Project</Link></h1>
        <div className="links">
            <Link to="/blogs">Blogs</Link>
            <Link to="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px"   
            }}>New Blog</Link>
            <Link to="/todo">ToDo</Link>
        </div>
    </nav>    
    );
}
 
export default Navbar;