const FilmCard = ({title, release_date, rt_score, description}) => {
    return(
        <div className="card">
            <div className="card-body">
                <h3>{title}</h3>
                <p>Released: {release_date}</p>
                <p>Rotten Tomatoes Score: {rt_score}</p>
                <hr/>
                <h6>Story:</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default FilmCard
