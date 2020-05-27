import React, {useState} from "react"
import {Button, Card} from "react-bootstrap";
import {httpConfig} from "../utils/http-config"
import {useHistory} from "react-router";
import * as Yup from "yup";
import {Form} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {FormDebugger} from "../../shared/components/FormDebugger";
import {Formik} from "formik";
import {getProfileByProfileId} from "../actions/profileAction"
import { UseJwtProfileId } from "../utils/JwtHelpers";

export const Activity = ({activities}, props) => {

	const profileId = UseJwtProfileId();
	let activity = activities[Math.round (Math.random()*activities.length-1)];

	const {
		submitStatus,
		status,
		values,
		errors,
		touched,
		dirty,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset
	} = props;
console.log(props)

	const favorite =  {
		favoriteProfileId: profileId,
	};

	const validator = Yup.object().shape({
		favoriteProfileId: Yup.string()
			.required("You're not signed in")
	});
	

	const submitFav = (values) => {
		//grab jwt token to pass in headers on post request
		
		
		const headers = {
			'X-JWT-TOKEN': window.localStorage.getItem("jwt-token"),
			'favoriteProfileId': favorite
		};
		
		console.log(headers)

		httpConfig.post("apis/favorite/", values, {
			headers: headers})
			.then(reply => {
				let {message, type} = reply;
				let {data} = profileId;
				// setStatus({message, type});
				if(reply.status === 200) {
					alert("POSTED")
				}
				else {
					console.log("didn't work")
				};
			});
		};

	const submitButton = () => {
		window.location.reload()
	}


	return (
		<>
			<h1>Activity</h1>
			​
			<button className="btn btn-primary" type="submit" onClick={submitButton}>
			Find me something to do!
			</button>

			<h1 className="text-center bg-dark text-white">{activity.activityTitle}</h1>
			
			<Formik onSubmit={submitFav}
					initialValues={favorite}
					validationSchema={validator}
			>
				<Form onSubmit={handleSubmit}>
					<Card style={{width: '50rem'}}>
						<Card.Img variant="top" src={activity.activityImageUrl} />
						<Card.Body>
							<Card.Link href={activity.activityLink} target="_blank">Click here to View Activity details.</Card.Link>

							
								{/* <Form onSubmit={submitFav}> */}
									<Button variant="dark"
											type="submit"
											className="mr-2"
											value={profileId}
											onClick={submitStatus}>
										Favorite
									</Button>
								{/* </Form> */}
						</Card.Body>
					</Card>
					<FormDebugger {...props}/>

					{console.log(submitStatus)}
                     {status && (<div className={status.type}>{status.message}</div>)}
				</Form>
			</Formik>


		</>
	)
}