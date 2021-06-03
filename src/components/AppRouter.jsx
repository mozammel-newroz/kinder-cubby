import React from "react";
import { Switch, Route, Link } from "react-router-dom";
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
import Documentation from "../pages/resources/Documentation";
import Ebooks from "../pages/resources/Ebooks";
import FindNearbyChildCares from "../pages/resources/FindNearbyChildCares";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/pricing">
        <Pricing />
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

      <Route path="/e-books">
        <Ebooks />
      </Route>

      <Route path="/case-studies">
        <CaseStudies />
      </Route>

      <Route path="/documentation">
        <Documentation />
      </Route>

      <Route path="/find-nearby-child-care">
        <FindNearbyChildCares />
      </Route>
    </Switch>
  );
};

export default AppRouter;