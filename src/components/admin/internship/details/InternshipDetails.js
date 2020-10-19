import React from "react";
import $ from "jquery";

export default class InternshipDetails extends React.Component {
	render() {
		return (
			<div id="internship-details" className="container">
				<div className="container">
					<div className="brief-info bg-white rounded shadow mt-2 mb-4 mx-auto p-3">
						<div className="internship-title text-left col-12 d-flex flex-row p-1">
							<h5>Internship Name</h5>
						</div>

						<div className="professor col-12 text-left p-1">
							<span className="text-uppercase">Professor</span>
						</div>
						<div className="row col-12 text-muted p-1">
							<div className="col-md-3">
								<i className="fa fa-fw fa-clock-o" />
								<span>Duration : 3 months</span>
							</div>
							<div className="col-md-3">
								<i className="fa fa-fw fa-code" />
								<span>Domain : Web Development</span>
							</div>
							<div className="col-md-3">
								<i className="fa fa-fw fa-calendar" />
								<span>Start Date: 22/6/20</span>
							</div>
						</div>

						{/* <div className=" col-12 col-md-8">
                <button
                  className="btn btn-danger btn-sm border-light
                "
                >
                  Apply Now
                </button>
              </div> */}
						<div className="row text-muted my-2 p-1 d-md-flex other-details">
							<div className=" col-12 col-md-8">
								{/* <Link to="/feedback/:id"> */}
								<button
									className="btn btn-success shadow-sm"
									onClick={() => {
										this.props.history.push(
											"/feedback/:id"
										);
									}}
								>
									Mark Completed
								</button>
								{/* </Link> */}
							</div>
							<div className="col-12 col-md-4 p-2 row ">
								<span className="px-4 px-md-2 col-12 col-md-6">
									<span className="font-weight-bold">
										No of Applications
									</span>
									: 10
								</span>
								<span className="px-4 px-md-2 col-12 col-md-6 ">
									<span className="font-weight-bold">
										Posted on
									</span>
									: 22/6/20
								</span>
							</div>
						</div>
						<div className="">
							<span className="title text-uppercase text-left font-weight-bold">
								Provided by:
							</span>
							K. J. Somaiya College of Engineering
						</div>
					</div>
					<div className="request-section bg-white d-flex flex-column shadow rounded px-3 p-3 mt-2 justify-content-center">
						<div
							className="request-header"
							onClick={(event) =>
								$(".request-list").slideToggle("fast")
							}
						>
							<span className="title text-uppercase text-left font-weight-bold ">
								Requests
								<i
									className="fa fa-angle-down px-1 font-weight-bold"
									style={{ fontSize: "1.4em" }}
									aria-hidden="true"
								></i>
							</span>
						</div>
						<div className="request-list py-3">
							{/* <Link to="/student-profile/:id"> */}
							<div className="request bg-light mt-2 rounded p-2 py-3 d-flex flex-row align-items-center">
								<div
									className="col-8  "
									onClick={() => {
										this.props.history.push(
											"/student-profile/:id"
										);
									}}
								>
									<img
										src="data:image/jpeg;base64,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"
										alt="user_profile"
										className="img-rounded"
										style={{
											maxWidth: "2.5em",
											borderRadius: "1em",
										}}
									/>
									<span
										className="px-3"
										style={{ fontSize: "1.2em" }}
									>
										Atharva Kitkaru
									</span>
								</div>
								<div className="col-4 d-flex flex-row justify-content-center">
									<button className="btn btn-outline-success mx-1">
										Accept
									</button>

									<button className="btn btn-outline-danger mx-1">
										Reject
									</button>
								</div>
							</div>
							{/* </Link> */}
							{/* <Link to="/profile"> */}
							<div className="request bg-light mt-2 rounded p-2 py-3 d-flex flex-row align-items-center">
								<div
									className="col-8  "
									onClick={() => {
										this.props.history.push(
											"/student-profile/:id"
										);
									}}
								>
									<img
										src="data:image/jpeg;base64,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"
										alt="user_profile"
										className="img-rounded"
										style={{
											maxWidth: "2.5em",
											borderRadius: "1em",
										}}
									/>
									<span
										className="px-3"
										style={{ fontSize: "1.2em" }}
									>
										Atharva Kitkaru
									</span>
								</div>
								<div className="col-4 d-flex flex-row justify-content-center">
									<button className="btn btn-outline-success mx-1">
										Accept
									</button>

									<button className="btn btn-outline-danger mx-1">
										Reject
									</button>
								</div>
							</div>
							{/* </Link> */}
							{/* <Link to="/profile"> */}
						</div>
					</div>

					<div className="bg-white rounded detailed-info shadow my-4 mx-auto p-3">
						<div className="description py-2">
							<p className="title text-uppercase text-left font-weight-bold">
								Description
							</p>

							<p className="info">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Vitae suscipit tellus mauris a. Vulputate eu
								scelerisque felis imperdiet proin fermentum leo
								vel. Dolor sit amet consectetur adipiscing elit
								duis tristique sollicitudin. At augue eget arcu
								dictum varius duis at consectetur lorem. Magna
								sit amet purus gravida quis blandit turpis.
								Convallis a cras semper auctor. Ac tortor
								dignissim convallis aenean et. Diam volutpat
								commodo sed egestas egestas. Varius sit amet
								mattis vulputate. Commodo ullamcorper a lacus
								vestibulum sed. Mauris commodo quis imperdiet
								massa tincidunt nunc pulvinar. Dui sapien eget
								mi proin sed libero enim sed. Molestie nunc non
								blandit massa enim nec. Vel orci porta non
								pulvinar neque laoreet suspendisse interdum
								consectetur. Euismod nisi porta lorem mollis
								aliquam. Iaculis nunc sed augue lacus viverra.
								Sed odio morbi quis commodo odio aenean sed
								adipiscing. Arcu felis bibendum ut tristique et.
								Adipiscing elit ut aliquam purus.
							</p>
						</div>

						<hr />
						<div className="skills ">
							<p className="title text-uppercase text-left font-weight-bold">
								Skills Required
							</p>

							<ul className="list-group list-group-horizontal-lg p-0 m-0">
								<li className="list-group-item border-0 list-group-item-primary mr-2 my-2 rounded-lg text-center ">
									HTML
								</li>
								<li className="list-group-item border-0 list-group-item-primary mr-2 my-2 rounded-lg text-center">
									Javascript
								</li>
								<li className="list-group-item border-0 list-group-item-primary mr-2 my-2 rounded-lg text-center">
									Bootstrap
								</li>
								<li className="list-group-item border-0 list-group-item-primary mr-2 my-2 rounded-lg text-center">
									CSS
								</li>
								<li className="list-group-item border-0 list-group-item-primary mr-2 my-2 rounded-lg text-center">
									ReactJS
								</li>
								<li className="list-group-item border-0 list-group-item-primary mr-2 my-2 rounded-lg text-center">
									MongoDB
								</li>
							</ul>
						</div>

						<hr />
						<div className="openings">
							<p className="title text-uppercase text-left font-weight-bold">
								No of Positions
							</p>
							<p>2</p>
						</div>
						<hr />
						<div className="responsibilities">
							<p className="title text-uppercase text-left font-weight-bold">
								Responsibilities
							</p>
							<ol type="1" className="m-3">
								<li>abc</li>
								<li>def</li>
								<li>ghi</li>
								<li>jkl</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
