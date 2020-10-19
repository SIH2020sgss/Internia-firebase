import React from "react";
import { Link } from "react-router-dom";

export default class AppliedStudents extends React.Component {
	render() {
		return (
			<div className="">
				<h4 className="text-center p-2">Applied Students</h4>
				<div className="list-group list-group-flush">
					<div className="list-group-item d-flex flex-md-row flex-column">
						<div className="col-12 d-flex align-items-center col-md-9">
							<Link to="/student-profile/:id">
								Student hyperlink and details here
							</Link>
						</div>
						<div className="col-12 col-md-3 d-flex justify-content-between">
							<button className="btn btn-md mx-2 btn-outline-success">
								Accept
							</button>
							<button className="btn btn-md btn-outline-danger">
								Reject
							</button>
						</div>
					</div>
					<div className="list-group-item d-flex flex-md-row flex-column">
						<div className="col-12 d-flex align-items-center col-md-9">
							<Link to="/student-profile/:id">
								Student hyperlink and details here
							</Link>
						</div>
						<div className="col-12 col-md-3 d-flex justify-content-between">
							<button className="btn btn-md mx-2 btn-outline-success">
								Accept
							</button>
							<button className="btn btn-md btn-outline-danger">
								Reject
							</button>
						</div>
					</div>
					<div className="list-group-item d-flex flex-md-row flex-column">
						<div className="col-12 d-flex align-items-center col-md-9">
							<Link to="/student-profile/:id">
								Student hyperlink and details here
							</Link>
						</div>
						<div className="col-12 col-md-3 d-flex justify-content-between">
							<button className="btn btn-md mx-2 btn-outline-success">
								Accept
							</button>
							<button className="btn btn-md btn-outline-danger">
								Reject
							</button>
						</div>
					</div>
					<div className="list-group-item d-flex flex-md-row flex-column">
						<div className="col-12 d-flex align-items-center col-md-9">
							<Link to="/student-profile/:id">
								Student hyperlink and details here
							</Link>
						</div>
						<div className="col-12 col-md-3 d-flex justify-content-between">
							<button className="btn btn-md mx-2 btn-outline-success">
								Accept
							</button>
							<button className="btn btn-md btn-outline-danger">
								Reject
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
