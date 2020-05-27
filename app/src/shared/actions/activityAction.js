import {httpConfig} from "../utils/http-config";

export const getAllActivities = () => async dispatch => {
	const {data} = await httpConfig(`/apis/activity/`);
	dispatch({type: "GET_ALL_ACTIVITIES", payload: data})
};

export const getActivityByActivityId = (id) => async (dispatch) => {
	const {data} = await httpConfig(`/apis/activity/${id}`);
	dispatch({type: "GET_ACTIVITY_BY_ACTIVITY_ID", payload: data})
};

export const getActivityByActivityTitle = (activityTitle) => async (dispatch) => {
	const {data} = await httpConfig(`/apis/activity/?activityTitle=${activityTitle}`);
	dispatch({type: "GET_ACTIVITY_BY_ACTIVITY_TITLE", payload: data})
};

export const filterActivitiesByFavorites = (favorites) => dispatch => {
	dispatch({type: "FILTER_ACTIVITIES_BY_FAVORITES", payload: favorites})
};