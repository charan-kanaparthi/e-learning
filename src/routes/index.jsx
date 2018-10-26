import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import CoursePage from "views/CoursePage/CoursePage.js"
import LoadCoursePage from "views/CoursePage/LoadCoursePage.js"
var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/Components", name: "Components", component: Components },
  {path:"/courses",name:"CoursePage",component:CoursePage},
  {path:"/course",name:"Single Course Page",component:LoadCoursePage},
  { path: "/", name: "lp", component: CoursePage },

];

export default indexRoutes;
