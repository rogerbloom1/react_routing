const PersonCard = ({name, age, gender, films}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3>{name}</h3>
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Films: {films}</p>
            </div>
        </div>
    );
}
export default PersonCard;