import Button from "./components/Button/Button";
import { EventRegister } from "./components/Form/EventRegister";

const App = (): JSX.Element => {
  return (
    <>
      <EventRegister />
      <Button text="Sign up" />
    </>
  );
};

export default App;
