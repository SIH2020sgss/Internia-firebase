import React, { Component } from "react";
import "./FloatedInternships.scss";
import InternshipCard from "../../../shared/internship-card/InternshipCard";
import Filter from "../../../shared/browse/Filter";
import FilterModal from "../../../shared/browse/FilterModal";
//import $ from "jquery";

class FloatedInternships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalOnPhone: false,
      internship: ""
    };
  }

  searchInternship = (event) => {
    event.preventDefault();
    alert(`Searched for ${this.state.internship}`);
  };

  FilterModalClosed = () => this.setState({ showModalOnPhone: false });

  render() {
    return (
      <div>
        <div
          className="title font-weight-bold shadow-sm bg-light text-center p-1 mx-auto rounded my-3"
          style={{
            color: "#5e8aeb",
            width: "80%",
            fontSize: "1.3em"
          }}
        >
          <p className="my-auto">Floated Internships</p>
        </div>

        <div className="col-9 p-1 m-auto  d-sm-block d-md-none py-3 ">
          <FilterModal
            show={this.state.showModalOnPhone}
            FilterModalClosed={this.FilterModalClosed}
          />

          <button
            type="button"
            className="btn btn-light btn-block btn-outline-primary"
            onClick={() => this.setState({ showModalOnPhone: true })}
          >
            <span className="m-auto">Filters</span>
          </button>
        </div>
        <div
          id="browse-internships"
          className="col-11 row mx-auto"
          style={{ width: "80%" }}
        >
          <form
            autoComplete="off"
            className="col-12 my-2 p-0"
            onSubmit={this.searchInternship}
          >
            <div className="input-group">
              <input
                type="search"
                name="internship"
                id="internship"
                placeholder="search internships here ..."
                className="form-control"
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-light border">
                  <div className="fa fa-fw fa-search"></div>
                </button>
              </div>
            </div>
          </form>
          <div
            className="col-3 d-none d-xl-flex flex-column align-items-center rounded shadow bg-light"
            style={{
              border: "none",
              height: "80vh",
              marginTop: "1em",
              position: "sticky",
              top: "3em"
            }}
          >
            <div id="filter-box px-0" style={{ width: "100%" }}>
              <Filter />
            </div>
          </div>
          <div className="col-12 col-xl-8 offset-xl-1 px-0">
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
            <InternshipCard />
          </div>
        </div>
      </div>
    );
  }
}

export default FloatedInternships;
