import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render");
    // accessing the propertites of Cardlist components and destructuring into the monsters
    const { monsters } = this.props;
    return (
        // <div>ok</div>
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}

export default CardList;
