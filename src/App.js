import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("render from app");
  const [searchText, setSearchText] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMosters, setFilteredMonsters] = useState([]);
  const [titleText, setTitleText] = useState('');
  console.log({ monsters });

  useEffect(() => {
    console.log("working!!");
    // gets the resolved data from api
    // convert the resolved data into json file
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonsters(user));
  }, []);

  useEffect(() => {
    const newfilteredMosters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchText);
    }); // evaluates the changes using the state.searchText
    setFilteredMonsters(newfilteredMosters);
  }, [monsters, searchText]);

  const onSearchChange = (event) => {
    const searchTextField = event.target.value.toLocaleLowerCase(); // get the data from input field
    setSearchText(
      // calls the render again to update the changes
      searchTextField
    );
  };
  const ontitleChange = (event) => {
    const newTitleText = event.target.value.toLocaleLowerCase(); // get the data from input field
    setTitleText(
      // calls the render again to update the changes
      newTitleText
    );
  };

  // optimising the varilables rather than calling everytime this.state.varibaleName
  // const { onSearchChange } = this;

  return (
    <div className="App">
      <h1 className="app-title">{titleText}</h1>
      {/* calls the dynamic search-box component using the props */}
      <SearchBox
        onSearchChangeHandler={ontitleChange}
        placeholder="Insert Title"
        className="title-search-box"
      />
      <SearchBox
        onSearchChangeHandler={onSearchChange}
        placeholder="Search Cuties"
        className="monster-search-box"
      />

      {/* calling dynamic card-list component for filteredMosters */}
      <CardList monsters={filteredMosters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchText: "",
//     };
//   }

//   // run the following code while mounting code into the site
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users") // gets the resolved data from api
//       .then((response) => response.json()) // convert the resolved data into json file
//       .then((users) =>
//         this.setState( // setState(), for re-rendering the site to to update the changes
//           () => {
//             return { monsters: users }; // update the changes
//           }
//         )
//       );
//   }

//   render() {

//   }
// }

export default App;
