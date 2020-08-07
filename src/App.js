import React, { Component } from 'react';
import Food from  "./Food";
import Meal from  "./Meal";
import Navbar from "./Navbar";
import FoodSearch from "./FoodSearch";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { findByDisplayValue } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
        <Route exact path ="/food/:name"  
        render={routeProps => 
        <Food {...routeProps} />} />
        <Route exact path="/food/:foodName/drink/:drinkName" component={Meal}/>
        <Route exact path="/" component={FoodSearch}/>
        <Route render={() => <h1>ERROR! NOT FOUND!</h1>}/>
        </Switch>
      </div>

    );
  }
}

export default App;