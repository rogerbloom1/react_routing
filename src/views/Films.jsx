import {useState, useEffect} from "react";
import {FilmCard} from "../components/FilmCard";
const Films = () => {
    const [filmList, setFilmList] = useState([]);

    useEffect(() => {
        if (filmList.length === 0){
        handleFilmFetch();
        }
    }, [])
    const handleFilmFetch = () => {
        fetch("https://ghibliapi.herokuapp.com/films", {mode: "cors"})
        .then((response) => response.json())
        .then((result) => setFilmList(result));


    }
    
    return (
        <main className="container">
            <h1>Films</h1>
            <hr/>
            <div className="card-columns">
                {filmList.map((film) => {
                    return <FilmCard key={film.id} title={film.title} release_date={film.release_date} rt_score={film.rt_score} description={film.description}/>;
                })}
            </div>
        </main>
    );
};

export default Films