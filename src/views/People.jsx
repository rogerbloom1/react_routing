import {useState, useEffect} from "react";
import PersonCard from "../components/PersonCard";
const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        if (people.length === 0){
        handleFilmFetch();
        }
    }, [])
    const handleFilmFetch = () => {
        fetch("https://ghibliapi.herokuapp.com/people", {mode: "cors"})
        .then((response) => response.json())
        .then((result) => setPeople(result))
        .catch((error) => console.log(error));
    }
    
    return (
        <main className="container">
            <h1>People</h1>
            <hr/>
            <div className="row">
                <div className="card-columns">
                    {people.map((person) => {
                        return (
                            <PersonCard 
                                key={person.id} 
                                name={person.name} 
                                age={person.age}
                                gender={person.gender}
                                films={person.films} 
                            />
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default People