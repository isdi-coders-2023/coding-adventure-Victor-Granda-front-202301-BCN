import React from "react";
import Button from "./components/Button/Button";
import GlobalStyles from "./golbalStyles";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Button text="Sign up" />
    </>
  );
};

export default App;
