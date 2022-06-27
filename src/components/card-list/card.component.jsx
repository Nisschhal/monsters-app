import { Component } from "react";
import './card.style.css';

class Card extends Component {

    render() {
        // d-structuring the details from the list
        const {id, name, email} = this.props.list;
        return (
            <div className="card-container">
                {/* fetching the random image date using the image src */}
            <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`monster ${name}`} className="src" />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
    }
}

export default Card;