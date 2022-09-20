
import './App.css';

function App() {
  return (
    <div className="App">
     <NewsCard></NewsCard>
    </div>
  );
}

function NewsCard() {
  return(
    <div className="newsCard">

<div className="cardBody">
  <div className="content">
    <div className="img-container">
      <img src="image" alt="news tumbnail" />
    </div>
    <div className="content-container">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla.</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illo, ea velit nesciunt odit ex eveniet, laboriosam esse placeat non tempora aliquid blanditiis eos ut aspernatur beatae nobis repudiandae voluptates?</p>
    </div>
  
  </div>
</div>

    </div>
  )
}

export default App;
