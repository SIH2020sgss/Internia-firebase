import React from "react";
import "./InternshipDetails.scss";
import app from "../../../../Firebase";
let db = app.firestore();
class InternshipDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.internship = {};
    this.faculty_name = "";
  }
  componentDidMount() {
    let that = this;

    db.collection("internships")
      .doc(this.props.match.params.id)
      .get()
      .then((qs) => {
        if (!qs.empty) {
          that.internship = { ...qs.data() };
          //   console.log(that.internship);
        }
        that.setState({ ...that.state });
      });
    // console.log(this.internship);
    let t = this.internship.start_date || 0;
    let d;
    if (t !== 0) {
      d = new Date(t.seconds * 1000);
      this.start_date = d.toLocaleDateString();
    }
    t = this.internship.end_date || 0;
    if (t !== 0) {
      d = new Date(t.seconds * 1000);
      this.end_date = d.toDateString();
    }
    db.collection("faculties")
      .where("user_ref", "==", that.internship.created_by.trim())
      .get()
      .then(function (querySnapshot) {
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
      <div id="internship-details" className="container-fluid">
        <div className="container">
          <div className="brief-info bg-white rounded shadow-sm my-2 mx-auto p-3">
            <div className="internship-title lead text-left col-12 d-flex flex-row p-1">
              <span>{this.internship.title}</span>
            </div>

            <div className="professor lead col-12  text-left p-1">
              <span className="text-uppercase">{this.faculty_name}</span>
            </div>
            <div className="row col-12 text-muted p-1">
              <div className="col-md-3">
                <i className="fa fa-calendar" />
                {"  "}{" "}
                <span>Start Date: {this.start_date || "Not Specified"}</span>
              </div>
              <div className="col-md-3">
                <i className="fa fa-code" /> {"  "}
                <span>
                  Domain :{" "}
                  {/* {this.internship.domain.map((d) => (
                    <>{d}</>
                  ))} */}
                </span>
              </div>
              <div className="col-md-3">
                <i className="fa fa-calendar" />
                {"  "} <span>End Date: {this.end_date || "Not Specified"}</span>
              </div>
            </div>

            <div className="row  text-muted my-2 p-1 d-md-flex other-details">
              <div className=" col-12 col-md-8">
                <button
                  className="btn btn-danger btn-sm border-light"
                  onClick={(event) =>
                    (event.target.innerHTML = "Cancel Request")
                  }
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="col-12 col-md-4 p-2 row ">
                <span className="px-4 px-md-2 col-12 col-md-6">
                  <span className="font-weight-bold">No of Applications</span> :
                  {this.props.position}
                </span>
                <span className="px-4 px-md-2 col-12 col-md-6 ">
                  <span className="font-weight-bold">Posted on</span> : 22/6/20
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded detailed-info shadow-sm my-4 mx-auto p-3">
            <div className="description py-2">
              <p className="title text-uppercase text-left font-weight-bold">
                Description{" "}
              </p>

              <p className="info">{this.internship.description}</p>
            </div>

            <hr />
            <div className="skills ">
              <p className="title text-uppercase text-left font-weight-bold">
                Skills Required
              </p>

              <ul className="list-group list-group-horizontal-lg p-0 m-0">
                {this.internship.skill_requirements.map((skill) => {
                  return (
                    <li className="list-group-item list-group-item-primary mr-2 my-2 rounded-lg text-center ">
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>

            <hr />
            <div className="openings">
              <p className="title text-uppercase text-left font-weight-bold">
                No of Positions
              </p>
              <p>{this.internship.positions_available}</p>
            </div>
            <hr />
            <div className="responsibilities">
              <p className="title text-uppercase text-left font-weight-bold">
                Responsibilities
              </p>
              <ol type="1" className="m-3">
                {this.internship.responsibilities.map((responsibility) => {
                  return <li>{responsibility}</li>;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InternshipDetails;
