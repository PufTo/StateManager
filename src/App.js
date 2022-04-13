import logo from "./logo.svg";
import "./App.css";
import RemoveButton from "./components/RemoveButton";
import CountDisplay from "./components/CountDisplay";
import AddButton from "./components/AddButton";
import StyledButton from "./components/StyledButton";
import LoggedInDisplay from "./components/LoggedInDisplay";
import { useSelected } from "./store/use-selected";

function App() {
  const isLoggedIn = useSelected((state) => state.user.loggedIn);
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <RemoveButton /> <CountDisplay /> <AddButton /> <CountDisplay />
        </>
      ) : (
        <p>Log in to see more!</p>
      )}
      <div>
        <StyledButton /> <LoggedInDisplay />
      </div>
    </div>
  );
}

export default App;
