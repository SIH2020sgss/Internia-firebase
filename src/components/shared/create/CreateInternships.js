import React from "react";
import $ from "jquery";
import "./CreateInternships.scss";
/* Search when logged in --> 
dropdown options: 
-----------------------------
Create internships.
Profile.
Floated internships --> Students working on my internships(can view student's data), List of my internships. (ongoing)
Internship responses (request).
Signout.
*/
// add hide internships.

const domain = [
	"Full Stack Development",
	"Web Development",
	"Machine Learning",
	"AR/VR",
	"Mobile App Development",
	"Game Development",
	"Graphic Designing",
	"Content Writing",
	"UI/UX Design",
	"Cyber Security",
	"Artificial Intelligence",
	"Deep Learning",
	"Image Processing",
	"Digital Marketing",
	"Data Science",
	"Ethical Hacking",
	"Front-End Development",
	"Backend Development",
];

export default class CreateInternship extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			start_date: "",
			duration: "",
			apply_by: "",
			domain: domain[0],
			custom_domain_input: "",
		};
	}

	handleChange = (e) => {
		let event = e.target;
		this.setState({ [e.target.name]: e.target.value }, () => {
			if (event.name === "domain")
				if (this.state.domain === "__custom") {
					$("#custom_domain").fadeIn();
				} else {
					$("#custom_domain").fadeOut();
				}
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// if domain not in const domain --> get custom_domain_input
	};

	componentDidMount() {
		$("#custom_domain").hide();
	}

	render() {
		return (
			<div id="create-internships" className="create-internships">
				<div
					className="title font-weight-bold shadow- bg-transparent text-center text-primary p-1 mx-auto rounded my-3"
					style={{
						// color: "#5e8aeb",
						width: "80%",
						fontSize: "1.7em",
					}}
				>
					<p className="my-auto">Create Internship</p>
				</div>
				<div
					className="container mb-2  p-4  rounded"
					style={{ width: "80%" }}
				>
					<form autoComplete="off" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input
								className="form-control border-0"
								type="text"
								name="title"
								id="title"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description">Description</label>
							<textarea
								rows="6"
								className="form-control border-0"
								name="description"
								id="description"
								onChange={this.handleChange}
							/>
						</div>
						<div className="d-flex flex-md-row  flex-column  align-items-center">
							<div className="col-md-6 col-12 p-0 pr-3 py-2">
								<label htmlFor="apply_by">Apply by</label>
								<input
									type="date"
									name="apply_by"
									id="apply_by"
									className="form-control border-0"
									onChange={this.handleChange}
								/>
							</div>
							<div className="col-md-6 col-12 p-0 pr-3 py-2">
								<label htmlFor="start_date">Start date</label>
								<input
									type="date"
									name="start_date"
									id="start_date"
									className="form-control border-0"
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="d-flex flex-md-row  flex-column  align-items-center">
							<div className="form-group col-md-6 col-12 p-0 pr-3 py-2">
								<label htmlFor="duration">Duration</label>
								<input
									type="number"
									name="duration"
									id="duration"
									min="1"
									placeholder="in weeks"
									className="form-control border-0"
									onChange={this.handleChange}
								/>
							</div>
							<div className="col-md-6 col-12 p-0 pr-3 py-2">
								<div className="form-group">
									<label htmlFor="domain">Domain</label>
									<select
										name="domain"
										id="domain"
										className="custom-select border-0"
										onChange={this.handleChange}
									>
										{domain.sort().map((d) => (
											<option value={d} key={d}>
												{d}
											</option>
										))}
										<option value="__custom">
											--Custom domain--
										</option>
									</select>
								</div>
							</div>
						</div>
						<div
							id="custom_domain"
							className="form-group p-0 col-12 border-0"
						>
							<input
								type="text"
								name="custom_domain_input"
								id="custom_domain_input"
								className="form-control border-0"
								disabled={
									this.state.domain === "__custom"
										? false
										: true
								}
							/>
						</div>
						<div className="form-group my-4">
							<button
								type="submit"
								className="btn border-0 shadow btn-primary"
							>
								Create
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
