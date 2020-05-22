import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Home} from "./pages/Home";
import {FourOhFour} from "./pages/FourOhFour";
import {Footer} from "./pages/Footer";
import {MainNav} from "./shared/components/main-nav/MainNav";
import {Favorites} from "./shared/components/favorites/Favorites";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./shared/reducers";


const store = createStore(reducers,applyMiddleware(thunk));


const Routing = (store) => (
	<>
		<Provider store={store}>
		<BrowserRouter>
			<MainNav/>
			<Favorites/>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route component={FourOhFour}/>
			</Switch>
			<Footer/>
		</BrowserRouter>
		</Provider>


	</>
);
ReactDOM.render(Routing(store) , document.querySelector("#root"));
