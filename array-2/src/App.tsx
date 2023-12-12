import "./App.css";

const sampleItems = [
  { id: 1, name: "Product A", category: "Electronics", price: 30, quantity: 2 },
  { id: 2, name: "Product B", category: "Clothing", price: 50, quantity: 1 },
  { id: 3, name: "Product C", category: "Electronics", price: 80, quantity: 3 },
  { id: 4, name: "Product D", category: "Clothing", price: 40, quantity: 2 },
  { id: 5, name: "Product E", category: "Books", price: 20, quantity: 4 },
];

type ItemType = {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
};

function App() {
  const calculateTotalQuantity = (items: ItemType[]) =>
    items.reduce((acc, curr) => (acc += curr.quantity), 0);

  const totalQuantity = calculateTotalQuantity(sampleItems);
  // console.log("Total Quantity:", totalQuantity);

  const groupItemsByCategory = (items: ItemType[]) => {
    return items.reduce((acc, curr) => {
      const existingEntry = curr.category in acc;

      if (existingEntry) {
        const obj = {
          ...acc,
          [curr.category]: [...acc[curr.category], curr],
        };

        return (acc = obj);
      } else {
        return { ...acc, [curr.category]: [{ ...curr }] };
      }
    }, {} as Record<string, ItemType[]>);
  };

  const itemsByCategory = groupItemsByCategory(sampleItems);
  console.log("Items by Category:", itemsByCategory);

  const transformToDictionary = (items: ItemType[]) => {
    return items.reduce((acc, curr) => {
      acc[curr.id] = { ...curr };

      return acc;
    }, {} as Record<string, ItemType>);
  };

  const itemsDictionary = transformToDictionary(sampleItems);
  // console.log("Items Dictionary:", itemsDictionary);

  return <h1>Array Manipulation</h1>;
}

export default App;
