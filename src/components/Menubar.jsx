import React from "react";
import { Link } from "react-router-dom";
import "../css/menuBar.css";

const Menubar = () => {
  return (
    <nav>
      <ul class="nav">
        <li>
          <a href="#">Product</a>
          <ul>
            <li>
              <a href="#">For Owners & Directors</a>
            </li>
            <li>
              <a href="#">For Teachers</a>
            </li>
            <li>
              <a href="#">For Parents</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">Features</a>
          <ul>
            <li>
              <a href="#">Feature Overviews</a>
            </li>
            <li>
              <a href="#">Attendance & check-ins</a>
            </li>
            <li>
              <a href="#">Activity Tracking</a>
            </li>
            <li>
              <a href="#">Center Management</a>
            </li>
            <li>
              <a href="#">Billing</a>
            </li>
            <li>
              <a href="#">Managing Learning Path</a>
            </li>
            <li>
              <a href="#">Parents Engagements</a>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/pricing">Pricing</Link>
        </li>

        <li>
          <a href="#">Resources</a>
          <ul>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">eBooks</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Find Nearby Childcare</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menubar;
