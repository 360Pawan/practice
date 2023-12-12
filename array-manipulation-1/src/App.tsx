import "./App.css";
import PeopleList from "./PeopleList";

const people = [
  { name: "Alice", age: 25, isAdmin: false },
  { name: "Bob", age: 30, isAdmin: true },
  { name: "Charlie", age: 22, isAdmin: false },
];

function App() {
  return <PeopleList data={people} />;
}

export default App;
