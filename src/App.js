import logo from './logo.svg';
import './App.css';
import './style.css';
import img from './img1.jpg';

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>

        <h1 className="title red">Aziz</h1>

        <br />

        <img src={img}  style={{ width:"30em",height:"20em"}}/>

        <br />

        <img src="img2.jpg" style={{ width:"30em",height:"20em"}}/>

      </div>

      <vidéo width="320" height="240" contrôles>

        <source src="maVidéo.mp4" type="video/mp4" />

      </vidéo>
    </div>
  );
}

export default App;
