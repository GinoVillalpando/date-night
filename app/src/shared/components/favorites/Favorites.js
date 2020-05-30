import React, {useEffect} from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import {useDispatch, useSelector} from "react-redux";
import {getFavoritesByCurrentLoggedInUser} from "../../actions/favoritesAction";
import * as jwtDecode from "jwt-decode";
import {FavoriteCard} from "./FavoriteCard"
import {filterActivitiesByFavorites, getAllActivities} from "../../actions/activityAction";
import {FavoriteFilter} from "./FavoriteFilter";
export const Favorites = (props) => {

	// use selector to set favorites to users stored in state
	const favorites = useSelector(state => (state.favorites ? state.favorites : []));

	// use dispatch from redux to dispatch actions
	const dispatch = useDispatch();

	// get favorites
	const effects = () => {
		dispatch(getFavoritesByCurrentLoggedInUser(favorites.favoriteId))
	};

	// set inputs to an empty array before update
	const inputs = [favorites.favoriteId];

	// do this effect on component update
	useEffect(effects, inputs);

	return (
		<>
			{console.log(favorites)}
			<FavoriteFilter favorites={favorites}/> 
	</>
	)
}