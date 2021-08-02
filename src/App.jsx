import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { check } from "./modules/user";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check());
  });

  return (
    <BrowserRouter>
      <Route exact path="/" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/todo" component={TodoListPage} />
    </BrowserRouter>
  );
}

export default App;
