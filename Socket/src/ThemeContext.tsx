import React, { createContext, useState } from "react";

export const ThemeContext = createContext<{
  toggle: boolean;
  handleToggle: () => void;
}>({ toggle: false, handleToggle: () => {} });

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
