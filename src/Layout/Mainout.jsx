import React, { Children } from "react";
import TopNav from "../Components/TopNav";
import Nav from "../Components/Nav";
import { useDispatch } from "react-redux";
import Alerts from "../Components/Alerts";

export default function Mainout({ children }) {
  return (
    <>
      <Alerts />
      <TopNav>
        <Nav />
      </TopNav>
      {children}
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0 text-center">
            <p>
              © {new Date().getFullYear()} DS BOX. All rights reserved.
              Distributed By : Chordz Technologies Pvt. Ltd.
            </p>
          </blockquote>
        </div>
      </div>
    </>
  );
}
