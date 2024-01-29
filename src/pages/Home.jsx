import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/scheduling">Scheduling</Link>
        </li>
        <li>
          <Link to="/adhocreporting">AdhocReporting</Link>
        </li>
        <li>
          <Link to="/customisedorderstatus">CustomisedOrderStatus</Link>
        </li>
        <li>
          <Link to="/tasklist">Tasklist</Link>
        </li>
        <li>
          <Link to="/productrecommendationengine">
            ProductRecommendationEngine
          </Link>
        </li>
        <li>
          <Link to="/activitylog">ActivityLog</Link>
        </li>
        <li>
          <Link to="/budgetingforecasting">BudgetingForecasting</Link>
        </li>
        <li>
          <Link to="/expensetracking">ExpenseTracking</Link>
        </li>
        <li>
          <Link to="/ganttchart">GanttChart</Link>
        </li>
        <li>
          <Link to="/googlecalendersync">GoogleCalenderSync</Link>
        </li>
        <li>
          <Link to="/smartcategorisation">SmartCategorisation</Link>
        </li>
        <li>
          <Link to="/ideamanagement">IdeaManagement</Link>
        </li>
        <li>
          <Link to="/prioritise">Prioritise</Link>
        </li>
        <li>
          <Link to="/reviewapproval">ReviewApproval</Link>
        </li>
        <li>
          <Link to="/requestmanagement">RequestManagement</Link>
        </li>
        <li>
          <Link to="/visualsearch">VisualSearch</Link>
        </li>
        <li>
          <Link to="/taskblocker">TaskBlocker</Link>
        </li>
        <li>
          <Link to="/savedcards">SavedCards</Link>
        </li>
        <li>
          <Link to="/taskallocatorone">TaskAllocatorOne</Link>
        </li>
        <li>
          <Link to="/splitviewscreen">SplitViewScreen</Link>
        </li>
        <li>
          <Link to="/editprofile">EditProfile</Link>
        </li>
        <li>
          <Link to="/signuploginmodule">SignupLoginModule</Link>
        </li>
        <li>
          <Link to="/termsandconditions">TermsAndConditions</Link>
        </li>
        <li>
          <Link to="/useraccount">UserAccount</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
