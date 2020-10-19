import React from "react";
import { Link } from "react-router-dom";

export default class InternshipCard extends React.Component {
	render() {
		return (
			<div className="card border-0 shadow my-4">
				<div className="card-body">
					<h5 className="card-title">WEB DEVELOPMENT</h5>
					<h6 className="card-subtitle mb-2 text-muted">
						Internship Portal
					</h6>
					<div className="card-text">
						<div className="row py-4">
							<div className="col-12 d-flex flex-xl-column col-xl-3">
								<div className="col-6 col-xl-12">
									<i className="fa fa-fw fa-hourglass-start" />
									Apply By
								</div>
								<div className="col-6 col-xl-12">
									30 July 2020
								</div>
							</div>
							<div className="col-12 d-flex flex-xl-column col-xl-3">
								<div className="col-6 col-xl-12">
									<i className="fa fa-fw fa-calendar" />
									Start Date
								</div>
								<div className="col-6 col-xl-12">
									Immediately
								</div>
							</div>
							<div className="col-12 d-flex flex-xl-column col-xl-3">
								<div className="col-6 col-xl-12">
									<i className="fa fa-fw fa-clock-o" />
									Duration
								</div>
								<div className="col-6 col-xl-12">4 Months</div>
							</div>
							<div className="col-12 d-flex flex-xl-column col-xl-3">
								<div className="col-6 col-xl-12">
									<i className="fa fa-fw fa-money" />
									Stipend
								</div>
								<div className="col-6 col-xl-12">N/A</div>
							</div>
						</div>

						<div className="float-right mr-3">
							<Link to="/internship-details">
								View details
								<i className="fa fa-fw fa-chevron-right " />
							</Link>
						</div>
						<div className="float-left mr-3">
							<Link to="/applied-students">
								Applied Students
								<i className="fa fa-fw fa-chevron-right " />
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
