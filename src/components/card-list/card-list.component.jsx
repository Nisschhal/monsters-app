// import SearchBox from "./components/search-box/search-box.component";
import './card-list.style.css';
import Card from'./card.component';

// css file need its extension but not with jsx file

const CardList = ({monsters}) => {
  
    console.log(monsters);
    console.log("render");
    // accessing the propertites of Cardlist components and destructuring into the monsters
    return (
        // <div>ok</div>
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            // calling the card component by passing the list in it.
         <Card monster={monster}  />
        )})}
      </div>
    )
  }


export default CardList;
