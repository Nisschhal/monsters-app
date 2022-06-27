import { Component } from "react";


class Card extends Component {

    render() {
        const {id, name, email} = this.props.list;
        return (
            <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} className="src" />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
    }
}

export default Card;