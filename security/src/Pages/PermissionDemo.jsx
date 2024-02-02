import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "../components/Admin";
import Home from "../components/Home";
import PublicElement from "../components/PublicElement";
import AdminElement from "../components/AdminElement";
import { Current_User } from "../components/Users";

function PermissionDemo() {
  return (
    <div>
      <hr />
      <h1>Permission</h1>
      <h3>You are Logged in as {Current_User}</h3>
      <Link to={"/"}>Home</Link>
      <Link to={"/admin"}>Admin</Link>
      <Routes>
        <Route
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminElement>
              <Admin />
            </AdminElement>
          }
        />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default PermissionDemo;
