import { Component } from "react";
import "./App.css";
import CardList from './components/card-list/card-list.component';
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: "",
    };
  }


  // run the following code while mounting code into the site
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // gets the resolved data from api
      .then((response) => response.json()) // convert the resolved data into json file
      .then((users) => 
        this.setState( // setState(), for re-rendering the site to to update the changes
          () => {
            return { monsters: users }; // update the changes
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchText = event.target.value.toLocaleLowerCase(); // get the data from input field
    this.setState( // calls the render again to update the changes
      () => {
        return { searchText }; // update the changes of searchText
      },
    );
  };



  render() {
    console.log("render from app");


    // optimising the varilables rather than calling everytime this.state.varibaleName
    const { monsters, searchText } = this.state;
    const { onSearchChange } = this;

    const filteredMosters = monsters.filter((monster) => {
       return monster.name.toLocaleLowerCase().includes(searchText);
      } // evaluates the changes using the state.searchText
    )
    return (
      <div className="App">
       <SearchBox onSearchChangeHandler={onSearchChange} />
       <CardList monsters={filteredMosters} />
      </div>
    )
  }
}

export default App;
