import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {

    return (  // could also use forEach
        <div className="home">
            <h1>Hi, welcome to this experiment.</h1>
            <p>Click on a page in the navbar or below...</p>
            <br />
            <h3><Link to="/blogs">Blogs</Link></h3>
            <br />
            <h3><Link to="/todo">ToDo List</Link></h3>
            <br />
            <br />
            <p>The tutorials I used to create this are the following:</p>
            <br />
            <span><a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d">Full Modern React Tutorial</a> by The Net Ninja (Blogs)</span>
            <br />
            <span><a href="https://www.youtube.com/watch?v=hQAHSlTtcmY">Learn React In 30 Minutes</a> by Web Dev Simplified (ToDo List)</span>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <p style={{ color: "#f1356d" }}>Some of the concepts I need to grasp much better are the hooks I used (useEffect, useRef, and useState) as well as using local storage. Plus my mental map of the code is still slightly hazy.</p>
            <br />
            <p style={{ color: "#d3d3d3" }}>(Btw I didn't pay much attention to CSS.)</p>
        </div>
    ); // too lazy to do CSS for this so just using br tags
}

export default Home;