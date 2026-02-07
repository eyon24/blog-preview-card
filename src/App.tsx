import "./App.css";
import portrait from "./assets/image-avatar.webp";

function App() {
  return (
    <div className="main">
      <div className="card">
        <div className="illustration" />
        <div className="text-container">
          <div className="title-card figtree-bold">Learning</div>
          <span className="figtree-medium">Published 21 Dec 2023</span>
          <h1 className="title figtree-bold">HTML & CSS foundations</h1>
          <p className="figtree-medium">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="footer">
          <img src={portrait} alt="Portrait of Michelle" />
          <span className="figtree-bold">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
}

export default App;
