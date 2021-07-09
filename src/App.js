import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Todo from "./components/Todo";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/signin" component={Signin} />
      <Route path="/todo" component={Todo} />
    </BrowserRouter>
  );
}

export default App;
