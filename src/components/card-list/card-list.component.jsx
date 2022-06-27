import { Component } from "react";
// import SearchBox from "./components/search-box/search-box.component";
import './card-list.style.css';
import Card from'./card.component';


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
         <Card list={monster} />
        )})}
      </div>
    )
  }
}

export default CardList;
