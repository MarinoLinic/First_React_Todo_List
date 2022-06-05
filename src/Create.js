import { useState } from "react";

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('Marino');

const someAlert = () => { // remove if you ever come back to this project
    alert("Your blog will not be submitted because I haven't finished doing this... lol.");
}

    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Marino">Marino</option>
                    <option value="Dorian">Dorian</option>
                    <option value="Antonio">Antonio</option>
                </select>
                <button onClick={() => someAlert()}>Add Blog</button>
            </form>
            <br></br>
            <h3>Data:</h3>
            <p>Title: { title }</p>
            <p>Body: { body }</p>
            <p>Author: { author }</p>
        </div>
    );
}
 
export default Create;