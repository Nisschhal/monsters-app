import { Component } from "react";
// import SearchBox from "./components/search-box/search-box.component";
import './card-list.style.css';
import Card from'./card.component';

// css file need its extension but not with jsx file

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
            // calling the card component by passing the list in it.
         <Card list={monster} />
        )})}
      </div>
    )
  }
}

export default CardList;
