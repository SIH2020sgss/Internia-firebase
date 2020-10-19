import React from "react";
import $ from "jquery";

export default class CreateFaculty extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			id: "",
			branch: "",
			email: "",
			password: "",
		};
	}
	emailValidation = () => {
		return this.state.email.match(/^\w+([.]?\w+)*@somaiya\.edu$/)
			? true
			: false;
	};

	passwordSecure = () => {
		return this.state.password.match(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,256}$/
		)
			? true
			: false;
	};

	handleChange = (e) => {
		const { target } = e;
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			() => {
				if (target.name === "email") {
					if (this.emailValidation()) {
						$("#email")
							.removeClass("is-invalid")
							.addClass("is-valid");
					} else {
						$("#email")
							.addClass("is-invalid")
							.removeClass("is-valid");
					}
				}
				if (target.name === "password") {
					if (this.passwordSecure()) {
						$("#password")
							.removeClass("is-invalid")
							.addClass("is-valid");
					} else {
						$("#password")
							.addClass("is-invalid")
							.removeClass("is-valid");
					}
				}
			}
		);
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div className="">
				<div
					className="title font-weight-bold shadow- bg-transparent text-center text-primary p-1 mx-auto rounded my-3"
					style={{
						// color: "#5e8aeb",
						width: "80%",
						fontSize: "1.7em",
					}}
				>
					<p className="my-auto">Create Faculty</p>
				</div>
				<div className="text-left mx-auto p-4" style={{ width: "80%" }}>
					<form autoComplete="off" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								id="name"
								className="form-control border-0"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="id">Id</label>
							<input
								type="text"
								name="id"
								id="id"
								className="form-control border-0"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="branch">Branch</label>
							<input
								type="text"
								name="branch"
								id="branch"
								className="form-control border-0"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								className="form-control border-0"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								id="password"
								className="form-control border-0"
								onChange={this.handleChange}
							/>
							<small className="form-text text-muted mb-3">
								At least 8 characters—the more characters, the
								better.
								<br /> A mixture of both uppercase and lowercase
								letters.
								<br /> A mixture of letters and numbers.
								<br /> Inclusion of at least one special
								character, e.g., ! @ # ?
							</small>
						</div>
						<div className="form-group">
							<button
								type="submit"
								className="btn btn-primary shadow"
							>
								Create Faculty
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
