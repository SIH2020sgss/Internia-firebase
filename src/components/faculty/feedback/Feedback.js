import React, { Component } from "react";
/* 
Performance scale 1 to 5
Timely Reporting
*/

class Feedback extends Component {
  handleChange = (event) => {
    let { target } = event;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container-fluid">
        <div
          className="title font-weight-bold shadow-sm bg-light text-center p-1 mx-auto rounded my-3"
          style={{ color: "#5e8aeb", width: "80%", fontSize: "1.3em" }}
        >
          <p className="my-auto">Feedback</p>
        </div>
        <div className="mx-auto border p-3 shadow-sm" style={{ width: "80%" }}>
          <form ref={(form) => (this.form = form)}>
            <div className="d-flex flex-column">
              <div className="my-2 ">
                <div className="card shadow-sm border-0 ">
                  <div className="card-header border-0 font-weight-bold">
                    <span style={{ fontSize: "1.2em" }}>Student 1</span>
                  </div>
                  <div>
                    <div className=" p-0">
                      <form
                        autoComplete={"off"}
                        onSubmit={this.handleSubmit}
                        className="card-body"
                      >
                        <div className="form-group  my-0 row p-0">
                          <label
                            htmlFor="performance"
                            className="col-12 col-md-3 pr-2"
                          >
                            Performance
                          </label>
                          <div className="col-md-9">
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="performance"
                                name="performance"
                                value="1"
                              />
                              1
                            </label>
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="performance"
                                name="performance"
                                value="2"
                              />
                              2
                            </label>
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="performance"
                                name="performance"
                                value="3"
                              />
                              3
                            </label>
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="performance"
                                name="performance"
                                value="4"
                              />
                              4
                            </label>
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="performance"
                                name="performance"
                                value="5"
                              />
                              5
                            </label>
                          </div>
                        </div>
                        <div className="form-group my-0 row p-0">
                          <label
                            htmlFor="timely_submission"
                            className="col-12 col-md-3 pr-3"
                          >
                            Timely submission
                          </label>
                          <div className="col-md-9">
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="time"
                                name="time"
                                value="1"
                              />
                              1
                            </label>
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="time"
                                name="time"
                                value="2"
                              />
                              2
                            </label>
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="time"
                                name="time"
                                value="3"
                              />
                              3
                            </label>
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="time"
                                name="time"
                                value="4"
                              />
                              4
                            </label>
                            <label className="radio-inline pr-3">
                              <input
                                type="radio"
                                id="time"
                                name="time"
                                value="5"
                              />
                              5
                            </label>
                          </div>
                        </div>
                        <div className="form-group  my-0 row p-0">
                          <label
                            htmlFor="remarks"
                            className="col-12 col-md-3 pr-2 "
                          >
                            Remarks
                          </label>
                          <div className="col-md-9">
                            <textarea
                              className="form-control shadow-sm"
                              id="remarks"
                              rows="5"
                            />
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="col-12 my-0 text-right p-2">
                      <button
                        className="btn btn-outline-primary shadow-sm px-3"
                        type="submit"
                      >
                        Submit
                      </button>
                      <button
                        className="btn btn-outline-danger shadow-sm ml-2 px-3"
                        type="reset"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;
