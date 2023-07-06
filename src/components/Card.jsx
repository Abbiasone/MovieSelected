import PropTypes from "prop-types";
const Card = (props) => {
  return (
    <>
      <div>
        <div className="card" style={{ width: "200px", height: "475px" }}>
          <img src={props.Poster} alt="no tiene imagen" />
          <div className="card-body" style={{ width: "200px", height: "60px" }}>
            <h5 className="card-title">{props.Title}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.Year}</li>
              <li className="list-group-item">{props.Type}</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

Card.propTypes = {
  Title: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  Actors: PropTypes.string.isRequired,
  Year: PropTypes.number.isRequired,
  Type: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
};

export default Card;
