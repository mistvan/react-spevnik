import React from 'react';
import Router from '../../node_modules/react-router'
//import TukePage from './pages/TukePage.jsx';
import ArchivePage from './pages/ArchivePage.jsx';

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


class App extends React.Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Geeky Friday</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="app">Archive</Link></li>
                    </ul>
                </div>
            </nav>

            <RouteHandler />
        </div>
        );
    }
}

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={ArchivePage}/>
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('appentry'));
});