import React, { Component } from "react";
import "./InternshipCard.scss";
import { Link } from "react-router-dom";
import app from "../../../Firebase";
let db = app.firestore();
export default class InternshipCard extends Component {
  constructor(props) {
    super(props);
    this.faculty_name = "";
    this.state = {};
    this.end_date = "";
    this.start_date = "";
  }
  componentDidMount() {
    let that = this;
    let t = this.props.data.start_date || 0;
    let d;
    if (t !== 0) {
      d = new Date(t.seconds * 1000);
      this.start_date = d.toLocaleDateString();
    }

    t = this.props.data.end_date || 0;
    if (t !== 0) {
      d = new Date(t.seconds * 1000);
      this.end_date = d.toDateString();
    }

    db.collection("faculties")
      .where("user_ref", "==", that.props.data.created_by.trim())
      .get()
      .then(function (querySnapshot) {
        console.log(querySnapshot.docs);
        querySnapshot.docs.forEach(function (doc) {
          that.faculty_name = doc.data().name;
        });
        that.setState({ ...that.state });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
  render() {
    return (
      <div className="internships col-xl-12  p-md-3 py-3">
        <Link to={`/internship-details/${this.props.id}`}>
          <div
            className="card internships-container"
            style={{ width: "auto", border: "" }}
          >
            <div
              className="card-header internships-container-title"
              style={{ borderBottom: "medium solid royalblue" }}
            >
              <b
                style={{
                  fontSize: "1.2em",
                  color: "black",
                }}
                className="card-title text-justify my-auto"
              >
                {this.props.data.title}
              </b>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted text-left">
                <span className="mr-2 font-weight-bold">
                  Internship Supervisor:
                </span>
                {this.faculty_name}
              </h6>
              <div
                className="card-text text-muted text-left"
                style={{ fontSize: "" }}
              >
                <div className="mb-1">
                  <span className="mr-2 font-weight-bold">Reqs:</span>
                  {this.props.data.skill_requirements.map((skill) => (
                    <span key={Math.random().toString()} className="mx-auto">{skill} </span>
                  ))}
                </div>
                <div className="mb-1">
                  <span className="mr-2 font-weight-bold">Start Date:</span>
                  <span className="mx-auto">
                    {this.start_date || "Not Specified"}
                  </span>
                </div>
                <div className="mb-1">
                  <span className="mr-2 font-weight-bold">End Date:</span>
                  <span className="mx-auto">
                    {this.end_date || "Not Specified"}
                  </span>
                </div>
                <div className="mb-1">
                  <span className="mr-2 font-weight-bold">Domains:</span>
                  {this.props.data.domain.map((domain) => (
                    <span key={Math.random().toString()} className="mx-auto">{domain} </span>
                  ))}
                </div>
                <div>
                  <span className="mr-2 font-weight-bold">Status</span>
                  <span className="mx-auto">
                    {this.props.data.status || null}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
