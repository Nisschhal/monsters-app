import { Component } from "react";
import "./App.css";

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
          },
          () => {
            console.log(this.monsters); // calling the changes to work sychronously in asynchronous evnv.
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

    // optimising the varilables rather than calling everytime this.state.varibaleName
    const { monsters, searchText } = this.state;
    const { onSearchChange } = this;

    const filteredMosters = monsters.filter((monster) => {
       return monster.name.toLocaleLowerCase().includes(searchText);
      } // evaluates the changes using the state.searchText
    )
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />

        {filteredMosters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>; // list out the filtered monsters using map
        })}
      </div>
    );
  }
}

export default App;
