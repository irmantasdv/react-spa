import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HouseComponent from '../houseComponent/HouseComponent';
import HomeComponent from '../homePageComponent/HomeComponent';
import ErrorComponent from '../errorComponent/ErrorComponent';

class AppRouter extends Component {
render() {
    return (
        <div>
        <Router>
            <>
            <Switch>
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/houses" component={HouseComponent}/>
            <Route component={ErrorComponent}/>
            </Switch>
            </>
        </Router>
        </div>
    )
}

}
export default AppRouter;
