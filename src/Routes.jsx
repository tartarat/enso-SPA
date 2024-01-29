import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UserAccount = React.lazy(() => import("pages/UserAccount"));
const TermsAndConditions = React.lazy(() => import("pages/TermsAndConditions"));
const SignupLoginModule = React.lazy(() => import("pages/SignupLoginModule"));
const EditProfile = React.lazy(() => import("pages/EditProfile"));
const SplitViewScreen = React.lazy(() => import("pages/SplitViewScreen"));
const TaskAllocatorOne = React.lazy(() => import("pages/TaskAllocatorOne"));
const SavedCards = React.lazy(() => import("pages/SavedCards"));
const TaskBlocker = React.lazy(() => import("pages/TaskBlocker"));
const VisualSearch = React.lazy(() => import("pages/VisualSearch"));
const RequestManagement = React.lazy(() => import("pages/RequestManagement"));
const ReviewApproval = React.lazy(() => import("pages/ReviewApproval"));
const Prioritise = React.lazy(() => import("pages/Prioritise"));
const IdeaManagement = React.lazy(() => import("pages/IdeaManagement"));
const SmartCategorisation = React.lazy(
  () => import("pages/SmartCategorisation"),
);
const GoogleCalenderSync = React.lazy(() => import("pages/GoogleCalenderSync"));
const GanttChart = React.lazy(() => import("pages/GanttChart"));
const ExpenseTracking = React.lazy(() => import("pages/ExpenseTracking"));
const BudgetingForecasting = React.lazy(
  () => import("pages/BudgetingForecasting"),
);
const ActivityLog = React.lazy(() => import("pages/ActivityLog"));
const ProductRecommendationEngine = React.lazy(
  () => import("pages/ProductRecommendationEngine"),
);
const Tasklist = React.lazy(() => import("pages/Tasklist"));
const CustomisedOrderStatus = React.lazy(
  () => import("pages/CustomisedOrderStatus"),
);
const AdhocReporting = React.lazy(() => import("pages/AdhocReporting"));
const Scheduling = React.lazy(() => import("pages/Scheduling"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/adhocreporting" element={<AdhocReporting />} />
          <Route
            path="/customisedorderstatus"
            element={<CustomisedOrderStatus />}
          />
          <Route path="/tasklist" element={<Tasklist />} />
          <Route
            path="/productrecommendationengine"
            element={<ProductRecommendationEngine />}
          />
          <Route path="/activitylog" element={<ActivityLog />} />
          <Route
            path="/budgetingforecasting"
            element={<BudgetingForecasting />}
          />
          <Route path="/expensetracking" element={<ExpenseTracking />} />
          <Route path="/ganttchart" element={<GanttChart />} />
          <Route path="/googlecalendersync" element={<GoogleCalenderSync />} />
          <Route
            path="/smartcategorisation"
            element={<SmartCategorisation />}
          />
          <Route path="/ideamanagement" element={<IdeaManagement />} />
          <Route path="/prioritise" element={<Prioritise />} />
          <Route path="/reviewapproval" element={<ReviewApproval />} />
          <Route path="/requestmanagement" element={<RequestManagement />} />
          <Route path="/visualsearch" element={<VisualSearch />} />
          <Route path="/taskblocker" element={<TaskBlocker />} />
          <Route path="/savedcards" element={<SavedCards />} />
          <Route path="/taskallocatorone" element={<TaskAllocatorOne />} />
          <Route path="/splitviewscreen" element={<SplitViewScreen />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/signuploginmodule" element={<SignupLoginModule />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/useraccount" element={<UserAccount />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
