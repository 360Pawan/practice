import "./App.css";

const testArray = [5, 3, 8, 1, 2, 5, 3, 7, 8, 10];

const sampleObjects = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Bob", age: 35 },
];

const sampleStrings = ["apple", "banana", "orange", "kiwi", "grape"];

function App() {
  const findElementIndex = (items: number[], targetNumber: number) => {
    return items.findIndex((el) => el == targetNumber);
  };

  const targetIndex = findElementIndex(testArray, 2);
  // console.log("Index of 2:", targetIndex);

  const removeDuplicatesFromArray = (items: number[]) => {
    return [...new Set(items)];
  };

  const uniqueArray = removeDuplicatesFromArray(testArray);
  // console.log("Unique Array:", uniqueArray);

  const reverseArray = (items: number[]) => {
    return [...items.reverse()];
  };

  const reversedArray = reverseArray(testArray);
  // console.log("Reversed Array:", reversedArray);

  const sortByProperty = (
    items: { id: number; name: string; age: number }[],
    property: string
  ) => {
    return items.sort((a, b) => a[property] - b[property]);
  };

  const sortedObjects = sortByProperty(sampleObjects, "age");
  // console.log("Sorted Objects by Age:", sortedObjects);

  const sortByStringLength = (items: string[]) => {
    return items.sort((a, b) => a.length - b.length);
  };

  const sortedStrings = sortByStringLength(sampleStrings);
  console.log("Sorted Strings by Length:", sortedStrings);

  return <h1>Array test</h1>;
}

export default App;
