import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap"
import {SignUpModal} from "./sign-up/SignUpModal";
import {SignInModal} from "./sign-in/SignInModal";
// import {ProfileModal} from "./profile/ProfileModal";
import {UseJwt} from "../../utils/JwtHelpers";
import {httpConfig} from "../../utils/http-config"



export const MainNav = (props) => {

	const jwt = UseJwt();

	const signOut = () => {
		httpConfig.get("apis/sign-out/")
			.then(reply => {
				if (reply.status === 200) {
					window.localStorage.removeItem("jwt-token");
					console.log(reply);
					setTimeout(() => {
						window.location.reload();
					}, 1500);
				}
			});
	};

	return(
		<Navbar bg="primary" variant="dark">
			<LinkContainer exact to="/" >
				<Navbar.Brand>Navbar</Navbar.Brand>
			</LinkContainer>
			<Nav className="mr-auto">
				{/*<ProfileModal/>*/}
				<SignUpModal/>
				<SignInModal/>
				{jwt !== null &&
				<LinkContainer exact to="/favorites" >
					<Nav.Link>Favorites</Nav.Link>
				</LinkContainer>
				}
				{jwt !== null &&
					<Nav.Item onClick={signOut}
					className="btn"
					>
						Sign Out
					</Nav.Item>
				}
			</Nav>
		</Navbar>
	)
};