import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="containerCard">
        <Link to={props.path}>
          <img src={props.imageUrl} alt={props.title} />
        </Link>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Card;
