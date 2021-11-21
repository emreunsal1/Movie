import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import BasketPage from "./pages/BasketPage";
import { ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/basket">
            <BasketPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
