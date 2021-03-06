import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import SupportCenter from "../pages/SupportCenter";
import ChangePassword from "../pages/auth/ChangePassword";
import Login from "../pages/auth/Login";
import RequestCall from "../pages/auth/RequestCall";
import SignUp from "../pages/auth/SignUp";
import SignUpOption from "../pages/auth/SignUpOption";
import TryItFree from "../pages/auth/TryItFree";
import ContactUs from "../pages/ContactUs";
import ActivityTracking from "../pages/Features/ActivityTracking";
import AttendanceAndCheckins from "../pages/Features/AttendanceAndCheckins";
import Billing from "../pages/Features/Billing";
import CenterManagement from "../pages/Features/CenterManagement";
import FeatureOverviews from "../pages/Features/FeatureOverviews";
import ManagingLearningPath from "../pages/Features/ManagingLearningPath";
import ParentsEngagements from "../pages/Features/ParentsEngagements";

import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import OwnersAndDirectors from "../pages/product/OwnersAndDirectors";
import Parents from "../pages/product/Parents";
import Teachers from "../pages/product/Teachers";
import Blog from "../pages/resources/Blog";
import CaseStudies from "../pages/resources/CaseStudies";
import CaseStudiesDetails from "../pages/resources/CaseStudiesDetails";
import Documentation from "../pages/resources/Documentation";
import Ebooks from "../pages/resources/Ebooks";
import FindNearbyChildCares from "../pages/resources/FindNearbyChildCares";
import FindNearbyChildCaresSearchResult from "../pages/resources/FindNearbyChildCaresSearchResult";
import InviteYourFriends from "../pages/resources/InviteYourFriends";
import Leadership from "../pages/Leadership";
import SignUpParent from "../pages/auth/SignUpParent";
import GettingStarted from "../pages/resources/GettingStarted";
import GettingStartedDetails from "../pages/resources/GettingStartedDetails";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/pricing">
        <Pricing />
      </Route>

      <Route path="/about-us">
        <AboutUs />
      </Route>

      <Route path="/contact-us">
        <ContactUs />
      </Route>

      <Route path="/support-center">
        <SupportCenter />
      </Route>

      {/* others  */}
      <Route path="/leadership">
        <Leadership />
      </Route>

      {/* auth  */}
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/sign-up-parent">
        <SignUpParent />
      </Route>
      <Route path="/sign-up-option">
        <SignUpOption />
      </Route>
      <Route path="/change-password">
        <ChangePassword />
      </Route>
      <Route path="/try-it-free">
        <TryItFree />
      </Route>
      <Route path="/request-call">
        <RequestCall />
      </Route>

      {/* features  */}

      <Route path="/activity-tracking">
        <ActivityTracking />
      </Route>

      <Route path="/attendance-and-check-ins">
        <AttendanceAndCheckins />
      </Route>

      <Route path="/billing">
        <Billing />
      </Route>

      <Route path="/center-management">
        <CenterManagement />
      </Route>

      <Route path="/feature-overviews">
        <FeatureOverviews />
      </Route>

      <Route path="/managing-learning-path">
        <ManagingLearningPath />
      </Route>

      <Route path="/parents-engagements">
        <ParentsEngagements />
      </Route>

      {/* product  */}

      <Route path="/for-owners-and-directors">
        <OwnersAndDirectors />
      </Route>

      <Route path="/for-parents">
        <Parents />
      </Route>

      <Route path="/for-teachers">
        <Teachers />
      </Route>

      {/* resources  */}

      <Route path="/blog">
        <Blog />
      </Route>
      banner_button
      <Route path="/e-books">
        <Ebooks />
      </Route>

      <Route path="/case-studies">
        <CaseStudies />
      </Route>

      <Route path="/case-studies-details">
        <CaseStudiesDetails />
      </Route>

      <Route path="/documentation">
        <Documentation />
      </Route>

      <Route path="/getting-started">
        <GettingStarted />
      </Route>

      <Route path="/getting-started-details">
        <GettingStartedDetails />
      </Route>

      <Route path="/find-nearby-child-care">
        <FindNearbyChildCares />
      </Route>
      <Route path="/find-nearby-child-care-search-result">
        <FindNearbyChildCaresSearchResult />
      </Route>
      <Route path="/invite-your-friends">
        <InviteYourFriends />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default AppRouter;
