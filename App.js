import "./App.css";
import { useState } from "react";

export default function App() {
  var [Movies,setMovie] =useState( [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    }
  ]);

  return (
    <div className="App">
      <div className="lists">
        <Newmovie/>
      {Movies.map((nm) => (
        <Movieslist poster={nm.poster} moviename={nm.name} summary={nm.summary} Rating={nm.rating}/>
      ))}
      </div>
    </div>
  );
}

function Movieslist({ poster, moviename, summary,Rating}) {
  const [like,setLike]=useState(0);
  const [dislike,setDislike]=useState(0);
  const style={
   color: Rating > 8.5 ? "green":"red"
  }
  return (
    <div className="movies">
      <img src={poster} alt="Poster_pic" /> 
       <div className="title">
      <h1 className="moviename">{moviename}</h1>
      <h4 style={style} className="rating"><i class="fa fa-star" aria-hidden="true"></i>  {Rating}/10</h4>
      </div>
      <p className="summary"><b>Summary: </b>{summary}</p>
      <div className="like-btn">
      <button onClick={() => setLike(like + 1)}><i class="fa fa-thumbs-o-up fa-2x like"></i>Like{like}</button>
      <button onClick={()=>setDislike(dislike + 1)}><i class="fa fa-thumbs-o-down fa-2x dislike"></i>Dislike{dislike}</button>
      </div>
      
    </div>
  );
}
function Newmovie(){
  const[poste,setPoster]=useState('');
  const[nam,setName]=useState('');
  const[summar,setSummary]=useState('');
  const[ratin,setRating]=useState('');
  return(
    <div className="container">
      <h4 className="text-center">Add a New Movie</h4>
    <div className="inputs">
      <input placeholder="Enter the Poster link" onChange={(event)=>setPoster(event.target.value)}/>
      <input placeholder="Enter the Movie Name" onChange={(event)=>setName(event.target.value)}/>
      <input placeholder="Enter the Movie Summary" onChange={(event)=>setSummary(event.target.value)}/>
      <input placeholder="Enter the Movie Rating" onChange={(event)=>setRating(event.target.value)}/>
      
    </div>
    <button className="btn" onClick={()=>setMovie([...Movies,{name:{nam},poster:{poste},rating:{ratin},summary:{summar}}])}>Enter</button>
    </div>
  );
}
