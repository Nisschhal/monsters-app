import { Component } from "react";
// import SearchBox from "./components/search-box/search-box.component";
import './card-list.style.css';


class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render");
    // accessing the propertites of Cardlist components and destructuring into the monsters
    const { monsters } = this.props;
    return (
        // <div>ok</div>
      <div className="card-list">
        {monsters.map((monster) => {
          const {name, email, id} = monster;
          return (
          <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} className="src" />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )})}
      </div>
    )
  }
}

export default CardList;
