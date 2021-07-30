import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Experience from './components/Experience';

const App = () => {
	return (
		<Router>
			<>
				<Route exact path='/' component={Home} />
				<Switch>
					<Route exact path='/about' component={About} />
					<Route exact path='/skills' component={Skills} />
					<Route exact path='/profile' component={Profile} />
					<Route exact path='/portfolio' component={Portfolio} />
					<Route exact path='/education' component={Education} />
					<Route exact path='/experience' component={Experience} />
				</Switch>
			</>
		</Router>
	);
};

export default App;
