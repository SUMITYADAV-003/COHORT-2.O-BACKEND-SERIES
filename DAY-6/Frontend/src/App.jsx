import "./app.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/notes").then((res) => {
      setNotes(res.data.note).catch((err) => {
        console.error("Error:", err);
      });
    });
  }, []);

  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <div className="note">
            <p>{note.title}</p>
            <p>{note.description}</p>
            <h3>{note.age}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
