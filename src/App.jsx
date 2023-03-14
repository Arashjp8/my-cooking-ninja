import { BrowserRouter, Route, Switch } from "react-router-dom";

// page components
import Home from "./pages/home/home";
import Create from "./pages/create/create";
import Recipe from "./pages/recipe/recipe";
import Search from "./pages/search/search";
import Navbar from "./components/navbar";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
