import React from "react"
import {Button, Card} from "react-bootstrap";
import {httpConfig} from "../utils/http-config";
import {useHistory} from "react-router"

export const Activity = ({activities}) => {

  let activity = activities[Math.round(Math.random() * activities.length - 1)]

  const submit = () => {
    history.push("/")
  }

  const history = useHistory();

  const clickedFavorite = () => {
    const headers = {
      'X-JWT-TOKEN': window.localStorage.getItem("jwt-token"),
    };
    httpConfig.post("apis/favorite/", {"favoriteActivityId": activity.activityId}, {
      headers: headers
    })
      .then(reply => {
        let {message, type} = reply;
        // setStatus({message, type});
        if(reply.status === 200) {
			history.push("/")
          alert("Added to Favorites")
        } else {
          console.log("didn't work")
        };
      });
  };
  return (
    <>
      {/* <img src={dateLogo} alt="date night"/> */}
      <button className="btn btn-primary" type="submit" onClick={submit}>
      Find me something to do!
      </button>
      <h1 className="text-center bg-dark text-white">{activity.activityTitle}</h1>
		<Card style={{width: '50rem'}}>
			<Card.Img variant="top" src={activity.activityImageUrl} />
			<Card.Body>
			<Card.Link href={activity.activityLink} target="_blank">Click here to View Activity details.</Card.Link>
			<Button onClick={clickedFavorite} variant="primary">
				Favorite
			</Button>
			</Card.Body>
		</Card>
    </>
  )
}