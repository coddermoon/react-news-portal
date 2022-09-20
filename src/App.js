
import './App.css';
import {useEffect, useState} from "react"

function App() {
 

  return (
    <div className="App">
     <Categories></Categories>
     <NewsCard></NewsCard>
    </div>
  );
}
// make cetagories



function Categories() {
  const [categories,setCategory]= useState([])
  useEffect( ()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>setCategory(data.data.news_category))
  },[])
  
  return(
    <div className="categries">
      {
       categories.map(category=><span className="categoryItem">{category.category_name}</span>)
      }

    </div>
  )
}


// card section
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
