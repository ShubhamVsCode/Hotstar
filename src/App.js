import "./App.css";
import { getLinkPreview } from "link-preview-js";
import { useState } from "react";

function App() {
  const [link, setLink] = useState("");

  const getData = (e) => {
    e.preventDefault();

    const data = getLinkPreview(link);
    data.then((data) => console.log(data));
  };

  return (
    <div className="text-3xl text-center text-black-96 App">
      Hello
      <form action="">
        <input type="text" onChange={(e) => setLink(e.target.value)} />
        <button type="submit" onSubmit={getData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
