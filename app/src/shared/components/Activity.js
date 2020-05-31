import React from "react"
import {Button, Card} from "react-bootstrap";
import {httpConfig} from "../utils/http-config";
import {useHistory} from "react-router"

export const Activity = ({activities}) => {

  let activity = activities[Math.round(Math.random() * activities.length - 1)]

  const history = useHistory();


  const submit = () => {
    history.push("/")
  }

 
  const clickedFavorite = () => {
    const headers = {
      'X-JWT-TOKEN': window.localStorage.getItem("jwt-token"),
    };
    httpConfig.post("apis/favorite/", {"favoriteActivityId": activity.activityId}, {
      headers: headers
    })
      .then(reply => {
        let replyMessage = () => {
          alert(reply.message)
        } 
        if(reply.status === 200) {
			history.push("/")
          replyMessage();
        } else {
          replyMessage();
        };
      });
  };
  return (
    <>
    	<h1 className="text-center bg-dark p-5 text-white">{activity.activityTitle}</h1>
		<section className="section-height">
			<Card className="home-card mx-auto">
				<Card.Img variant="top" className="card-image mx-auto" src={activity.activityImageUrl} />
					<Card.Body className="d-flex justify-content-center">
					<Card.Link href={activity.activityLink} target="_blank">Click here to View Activity details.</Card.Link>
						<Button onClick={clickedFavorite} variant="primary" className="mx-4">
							Favorite
						</Button>
						<Button className="btn btn-primary" type="submit" onClick={submit}>
							Find me something to do!
						</Button>
				</Card.Body> 
			</Card>
		</section>
    </>
  )
}