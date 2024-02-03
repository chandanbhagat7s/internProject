import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainout from "../Layout/Mainout";
import NotFound from "../Components/PageNotFound";
import Home from "../Components/Home";
import Businesses from "../Components/Businesses";
import EditBusiness from "../Components/EditBusiness";
import MultiUserTable from "../Components/MultiuserTable";
import AllUser from "../Components/AllUsers";
import EditUser from "../Components/EditUser";
import Subscription from "../Components/subscription";
import SubForm from "../Components/SubForm";
import ChangePassForm from "../Components/ChangePassForm";
import Configuration from "../Components/Configuration";
import ConfigEditForm from "../Components/ConfigEditForm";
import Login from "../Components/Login";
import Authentication from "../Components/Auth/Authentication";

export default function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />

        <Route element={<Authentication />}>
          <Route
            path="/"
            element={
              <>
                <Mainout>
                  <Home />
                </Mainout>
              </>
            }
          ></Route>

          <Route
            path="/subscription"
            element={
              <>
                <Mainout>
                  <Subscription />
                </Mainout>
              </>
            }
          ></Route>
          <Route
            path="/subEdit/:id"
            element={
              <>
                <Mainout>
                  <SubForm />
                </Mainout>
              </>
            }
          ></Route>
          <Route
            path="/business"
            element={
              <>
                <Mainout>
                  <Businesses />
                </Mainout>
              </>
            }
          ></Route>

          <Route
            path="/edit/:id"
            element={
              <>
                <Mainout>
                  <EditBusiness />
                </Mainout>
              </>
            }
          ></Route>

          <Route
            path="/edituser/:id"
            element={
              <>
                <Mainout>
                  <EditUser />
                </Mainout>
              </>
            }
          ></Route>

          <Route
            path="/users"
            element={
              <>
                <Mainout>
                  <AllUser />
                </Mainout>
              </>
            }
          ></Route>
          <Route
            path="/edit/UserDetails"
            element={
              <>
                <Mainout>
                  <MultiUserTable />
                </Mainout>
              </>
            }
          ></Route>
          <Route
            path="/subscription"
            element={
              <>
                <Mainout>subscription</Mainout>
              </>
            }
          ></Route>
          <Route
            path="/changePassword"
            element={
              <>
                <Mainout>
                  <ChangePassForm />
                </Mainout>
              </>
            }
          ></Route>
          <Route
            path="/appConfig"
            element={
              <>
                <Mainout>
                  <Configuration />
                </Mainout>
              </>
            }
          ></Route>
          <Route
            path="/configEdit/:id"
            element={
              <>
                <Mainout>
                  <ConfigEditForm />
                </Mainout>
              </>
            }
          ></Route>
          <Route
            path="/*"
            element={
              <>
                <NotFound />
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
