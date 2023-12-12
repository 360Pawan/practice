import React, { useState } from "react";

const PeopleList = ({
  data,
}: {
  data: { name: string; age: number; isAdmin: boolean }[];
}) => {
  const [people, setPeople] = useState(data);

  const toggleAdmin = (index: number) => {
    const newPeople = [...people];
    newPeople[index] = {
      ...newPeople[index],
      isAdmin: !newPeople[index].isAdmin,
    };

    setPeople(newPeople);
  };

  const sortPeople = () => {
    const sortedPeople = [...people].sort((a, b) => a.age - b.age);

    setPeople(sortedPeople);
  };

  return (
    <>
      <button onClick={sortPeople}>Sort People</button>
      {people.map(
        (
          el: { name: string; age: number; isAdmin: boolean },
          index: number
        ) => (
          <div className="table" key={index}>
            <h3 className="table_cell">Name: {el.name}</h3>
            <h3 className="table_cell">Age: {el.age}</h3>
            <h3 className="table_cell">
              Is Admin: {el.isAdmin ? "Admin" : "Not a Admin"}
            </h3>
            <button onClick={() => toggleAdmin(index)}>Toggle Admin</button>
          </div>
        )
      )}
    </>
  );
};

export default PeopleList;
