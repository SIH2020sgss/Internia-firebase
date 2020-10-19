import React from "react";
import firebase from "../../../Firebase";
import "./Sidebar.scss";

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className="Sidebar nav min-vh-100">
				<div className="w-100 d-flex my-2">
					<img
						src="https://kjsce.somaiya.edu/assets/kjsce/img/newlogo/KJSCE-Logo.svg"
						alt="somaiya logo"
						className="mx-auto w-100"
						style={{ height: "", width: "" }}
					/>
				</div>
				<div className="w-100 row my-2 justify-content-center m-auto">
					<img
						src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-animated-movies-2019-1569510464.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*"
						alt="profile"
						className="rounded-circle w-75 shadow"
						// style={{ width: "1em", height: "1em" }}
					/>
				</div>
				<div className="w-100 my-2">
					<div
						className="nav-item rounded my-1 p-3 "
						onClick={() =>
							this.props.history.push("/create-internship")
						}
					>
						Create Internship
					</div>
					<div
						className="nav-item rounded my-1 p-3 "
						onClick={() =>
							this.props.history.push("/create-faculty")
						}
					>
						Create Faculty
					</div>
					<div
						className="nav-item rounded my-1 p-3 "
						onClick={() =>
							this.props.history.push("/floated-internships")
						}
					>
						Floated Internship
					</div>
					<div
						className="nav-item rounded my-1 p-3 "
						onClick={() =>
							this.props.history.push("/browse-internships")
						}
					>
						Browse Internship
					</div>
					<div
						className="nav-item rounded my-1 p-3 "
						onClick={() => this.props.history.push("/profile")}
					>
						Profile
					</div>
					<div
						className="nav-item rounded my-1 p-3 "
						onClick={() => firebase.auth().signOut()}
					>
						Sign Out
					</div>
				</div>
			</div>
		);
	}
}
