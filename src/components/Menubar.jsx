import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/menuBar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Menubar = () => {
  return (
    <nav>
      <ul class="nav">
        <li>
          <Link to="#">
            Product{" "}
            <span>
              <ExpandMoreIcon />
            </span>
          </Link>
          <ul>
            <li>
              <Link to="/for-owners-and-directors">For Owners & Directors</Link>
            </li>
            <li>
              <Link to="/for-teachers">For Teachers</Link>
            </li>
            <li>
              <Link to="/for-parents">For Parents</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="#">
            Features{" "}
            <span>
              <ExpandMoreIcon />
            </span>
          </Link>
          <ul>
            <li>
              <Link to="/feature-overviews">Feature Overviews</Link>
            </li>
            <li>
              <Link to="/attendance-and-check-ins">Attendance & check-ins</Link>
            </li>
            <li>
              <Link to="/activity-tracking">Activity Tracking</Link>
            </li>
            <li>
              <Link to="/center-management">Center Management</Link>
            </li>
            <li>
              <Link to="/billing">Billing</Link>
            </li>
            <li>
              <Link to="/managing-learning-path">Managing Learning Path</Link>
            </li>
            <li>
              <Link to="/parents-engagements">Parents Engagements</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/pricing">Pricing</Link>
        </li>

        <li>
          <a to="#">
            Resources{" "}
            <span>
              <ExpandMoreIcon />
            </span>
          </a>
          <ul>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
            <li>
              <Link to="/e-books">eBooks</Link>
            </li>
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/find-nearby-child-care">Find Nearby Childcare</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menubar;
