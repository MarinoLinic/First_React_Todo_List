import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>404!</h2>
            <p>Sorry, page not found!</p>
            <Link to="/">Back to the homepage.</Link>
        </div>
    );
}
 
export default NotFound;