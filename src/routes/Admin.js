import React from "react";
import Floatedinternship from "../components/admin/internship/floated/FloatedInternships";
import { Route, Switch, Redirect } from "react-router-dom";
import CreateInternship from "../components/shared/create/CreateInternships";
import Browse from "../components/admin/internship/browse/Browse";
import Sidebar from "../components/admin/sidebar/Sidebar";
import Profile from "../components/admin/profile/Profile";
import AppliedStudents from "../components/admin/internship/floated/AppliedStudents";
import $ from "jquery";
import InternshipDetails from "../components/admin/internship/details/InternshipDetails";
import CreateFaculty from "../components/admin/create-faculty/CreateFaculty";
import StudentProfile from "../components/student/profile/Profile";
export default class AdminRoutes extends React.Component {
	componentDidMount() {
		if ($(window).width() > 992)
			$("#navbarSupportedContent").addClass("show");
		// else $("#navbarSupportedContent").removeClass("show");
	}
	render() {
		return (
			<div>
				<button
					className="navbar-toggler d-block d-md-none btn"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					style={{
						position: "absolute",
						top: "0.4em",
						left: "0.4em",
						zIndex: "1",
					}}
				>
					<span class="fa fa-fw fa-navicon"></span>
				</button>
				<div className="d-flex flex-column flex-md-row min-vh-100">
					<div
						className="collapse show navbar-collapse shadow col-12 col-md-2 Sidebar-container"
						id="navbarSupportedContent"
					>
						<Route component={Sidebar} />
					</div>
					<div className="col-12 col-md-10 p-md-3 overflow-auto vh-100">
						<Switch>
							<Route
								exact
								path="/create-faculty"
								component={CreateFaculty}
							/>
							<Route
								exact
								path="/create-internship"
								component={CreateInternship}
							/>
							<Route
								exact
								path="/browse-internships"
								component={Browse}
							/>
							<Route
								exact
								path="/floated-internships"
								component={Floatedinternship}
							/>
							<Route
								exact
								path="/applied-students"
								component={AppliedStudents}
							/>
							<Route
								exact
								path="/internship-details"
								component={InternshipDetails}
							/>
							<Route
								exact
								path="/student-profile/:id"
								component={StudentProfile}
							/>
							<Route exact path="/profile" component={Profile} />
							<Redirect to="/profile" />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}
