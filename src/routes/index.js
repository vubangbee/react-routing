import AdminLayout from "../containers/Admin";
import DashBoardPage from "../containers/Admin/DashBoardPage";
import AddUserPage from "../containers/Admin/AddUserPage";
import HomeLayout from "../containers/Home";
import Detail from "../containers/Home/DetailPage";

const { default: HomePage } = require("../containers/Home/HomePage");
const { default: AboutPage } = require("../containers/Home/AboutPage");
const { default: ListMovie } = require("../containers/Home/ListMove");

//Mang
const routesHome = [
  // obj
  {
    exact: true,
    path: "/",
    component: HomeLayout,
  },
  {
    exact: false,
    path: "/home",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMovie,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: Detail,
  },
];

const routesAdmin = [
  { exact: false, path: "/admin", component: AdminLayout },
  { exact: false, path: "/dashboard", component: DashBoardPage },
  { exact: false, path: "/add-user", component: AddUserPage },
];

export { routesHome, routesAdmin };
