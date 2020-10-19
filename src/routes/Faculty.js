import React from "react";
// import Profile from "../components/student/profile/Profile";
import FloatedInternships from "../components/faculty/internship/floated/FloatedInternships";
// import InternshipDetails from "../components/student/internship/details/InternshipDetails";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import Feedback from "react-bootstrap/Feedback";
import CreateInternships from "../components/shared/create/CreateInternships";
import Header from "../components/faculty/header/Header";
import Profile from "../components/faculty/profile/Profile";
import Feedback from "../components/faculty/feedback/Feedback";
import InternshipDetails from "../components/faculty/internship/details/InternshipDetails";
import StudentProfile from "../components/faculty/profile/StudentProfile";
import BrowseInternships from "../components/shared/browse/BrowseInternships";
const Faculty = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route
        exact
        path={["/browse-internships", "/"]}
        component={BrowseInternships}
      />
      {/* <Route exact path='/profile' component={Profile} /> */}
      <Route exact path="/floated-internships" component={FloatedInternships} />
      <Route
        exact
        path="/internship-details/:id"
        component={InternshipDetails}
      />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/student-profile/:id" component={StudentProfile} />

      {/* <Route
        exact
        path='/internship-details/:id'
        component={InternshipDetails}
      /> */}
      <Route exact path="/create-internships" component={CreateInternships} />
      <Route exact path="/feedback/:id" component={Feedback} />

      <Route render={() => <Redirect to="/" />} />
    </BrowserRouter>
  );
};

export default Faculty;
