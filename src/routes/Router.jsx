import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About Us/About";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Service from "../pages/Services/Service";
import Construction from "../pages/UnderConstruction/Construction";
import AllProperties from "../pages/AllProperties/AllProperties";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Register/SignUp";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
// import Test from "../pages/Test/Test"; // private route 1
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard/Dashboard";
import UserWishList from "../pages/UserDashboard/UserWishList";
import MakeOfferPage from "../pages/MakeOffer/MakeOfferPage";
import AllUsers from "../pages/AdminDashboard/AllUsers/AllUsers";
import AdminProfile from "../pages/AdminDashboard/AdminProfile/AdminProfile";
import UserProfile from "../pages/UserDashboard/UserProfile/UserProfile";
import BoughtProperty from "../pages/UserDashboard/UserBoughtProperty/BoughtProperty";
import MyReview from "../pages/UserDashboard/UserReviews/MyReview";
import AddPropery from "../pages/AgentDashboard/AddProperty/AddPropery";
import AddProperties from "../pages/AgentDashboard/MyAddProperties/AddProperties";
import RequestedProperties from "../pages/AgentDashboard/RequestedProperties/RequestedProperties";
import SoldProperties from "../pages/AgentDashboard/SoldProperties/SoldProperties";
import ManageReviews from "../pages/AdminDashboard/ManageReviews/ManageReviews";
import ManageProperties from "../pages/AdminDashboard/ManageProperties/ManageProperties";
// import UpdateAddedProperties from "../pages/AgentDashboard/MyAddProperties/UpdateAddedProperties/UpdateAddedProperties";
import UpdateAddedProperties from "../pages/AgentDashboard/MyAddProperties/UpdateAddedProperties/UpdateAddedProperties"
import MakeOfferForm from "../pages/UserDashboard/MakeOfferForm/MakeOfferForm";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
      children:[
        { path: "/", element: <Home/>},
        { path: "*", element: <Error/>},
        { path: "/about-us", element: <About/>},
        { path: "/all-properties", element: 
        <PrivateRoute>
          <AllProperties/>
        </PrivateRoute>,
        },
        { path: "/properties/:id", element: 
        <PrivateRoute>
         <PropertyDetails/>
         </PrivateRoute>,
         loader: ({params})=> fetch(`http://localhost:5000/properties/${params.id}`).then(res=>res.json())
        },
        { path: "/services", element: <Service/>},
        { path: "/contact", element: <Contact/>},
        { path: "/pricing", element: <Construction/>},
        { path: "/login", element: <Login/>},
        { path: "/sign-up", element: <SignUp/>},

    ]
  },
  // dashboard routes
    {
      path: "/dashboard",
      element: <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>,
      children: [
        { path: "/dashboard/wishlist",
          element: <PrivateRoute>
            <UserWishList/>
          </PrivateRoute>,
        },
        {
          path: "/dashboard/all-users",
          element: <PrivateRoute>
            <AllUsers/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/admin-profile",
          element: <PrivateRoute>
            <AdminProfile/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/my-profile",
          element: <PrivateRoute>
            <UserProfile/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/property-bought",
          element: <PrivateRoute>
            <BoughtProperty/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/add-review",
          element: <PrivateRoute>
            <MyReview/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/requested-properties",
          element: <PrivateRoute>
            <RequestedProperties/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/myadded-properties",
          element: <PrivateRoute>
            <AddProperties/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/add-property",
          element: <PrivateRoute>
            <AddPropery/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/my-sold-properties",
          element: <PrivateRoute>
            <SoldProperties/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/manage-reviews",
          element: <PrivateRoute>
            <ManageReviews/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/manage-properties",
          element: <PrivateRoute>
            <ManageProperties/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/update-myaddedproperty/:id",
          element: <PrivateRoute>
            <UpdateAddedProperties/>
          </PrivateRoute>,
        },
        {
          path: "/dashboard/make-offer/:id",
          element: <PrivateRoute>
            <MakeOfferForm/>
          </PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/properties/${params.id}`)
        }
      ]
    }
  ]);

