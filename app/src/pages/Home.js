import React, {useEffect} from "react"
import {Activity} from "../shared/components/Activity";
import {useDispatch, useSelector} from "react-redux";
import {getAllActivities} from "../shared/actions/activityAction";


export const Home = () => {

	// use selector to set activities to users stored in state
	const activities = useSelector(state => state.activities);

	// use dispatch from redux to dispatch actions
	const dispatch = useDispatch();

	// get activities
	const effects = () => {
		dispatch(getAllActivities())
	};

	// set inputs to an empty array before update
	const inputs = [];

	// do this effect on component update
	useEffect(effects, inputs);


	return (
		<>
			{activities.length && <Activity activities={activities}/>}
		</>
	)
}