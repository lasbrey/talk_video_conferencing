import { lazy } from "react";
const Meeting = lazy(() => import("../pages/Dashboard/meeting"));
const Profile = lazy(() => import("../pages/Dashboard/profile"));

const routes = [
  {
    path: "/meeting", // url
    component: Meeting, // Component to render
  },
  {
    path: "/profile",
    component: Profile,
  }
];

export default routes;
