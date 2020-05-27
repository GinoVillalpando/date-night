import {useState, useEffect} from "react";
import * as jwtDecode from "jwt-decode";

	// custom hooks to grab the jwt and decode jwt data for logged in user
	// @author ginovillalpando@outlook.com

export const UseJwt = () => {
	
		const [jwt, setJwt] = useState(null);

		useEffect(() => {
			setJwt(window.localStorage.getItem("jwt-token"));
		}, []);
	return jwt;
};


export const UseJwtProfileId = () => {
		const[profileId, setProfileId] = useState(null);

		useEffect(() => {
			const token = window.localStorage.getItem("jwt-token");
			if(token !== null) {
                const decodeJwt = jwtDecode(token);
				setProfileId(decodeJwt.auth.profileId);
			}
		}, []);
		return profileId;
};

// export const UseJwtUserEmail = () => {
// 		const[profileUsername, setProfileUsername] = useState(null);

// 		useEffect(() => {
// 			const token = window.localStorage.getItem("jwt-token");
// 			if(token !== null) {
// 				const decodeJwt = jwtDecode(token);
// 				setUserEmail(decodeJwt.auth.userEmail);
// 				console.log(decodeJwt)
// 			}
// 		}, []);
// 		return userEmail;
// };