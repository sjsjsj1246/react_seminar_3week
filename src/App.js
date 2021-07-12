import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todo";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/todo" component={Todo} />
    </BrowserRouter>
  );
}

export default App;
