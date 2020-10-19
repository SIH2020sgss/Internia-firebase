import React, { Component } from "react";
import InternshipCard from "./InternshipCard";
class Browse extends Component {
	state = { internship: "" };
	searchInternship = (event) => {
		event.preventDefault();
		alert(`Searched for ${this.state.internship}`);
	};
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div className="">
				<div
					className="title font-weight-bold bg-transparent text-center text-primary p-1 mx-auto rounded my-3"
					style={{
						// color: "#5e8aeb",
						width: "80%",
						fontSize: "1.7em",
					}}
				>
					<p className="my-auto">Browse Internships</p>
				</div>
				<div className="mx-auto" style={{ width: "80%" }}>
					<form
						autoComplete="off"
						className="mb-3"
						onSubmit={this.searchInternship}
					>
						<div className="input-group">
							<input
								type="search"
								name="internship"
								id="internship"
								placeholder="Search internships"
								className="form-control border-0"
								onChange={this.handleChange}
							/>
							<div className="input-group-append">
								<button type="submit" className="btn btn-light">
									<div className="fa fa-fw fa-search"></div>
								</button>
							</div>
						</div>
					</form>
					<div className="">
						<InternshipCard />
						<InternshipCard />
						<InternshipCard />
					</div>
				</div>
			</div>
		);
	}
}

export default Browse;
