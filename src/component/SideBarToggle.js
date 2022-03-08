import React from "react";
import { Button } from "react-bootstrap";

import "./SideBar.css";

function SideBarToggle(props) {
  return (
    <div>
      <div className="sideBar">
        <div className="sideBar-Header">
          <p>
            Objective:<span>ABC</span>
          </p>
          <i
            className={`fa fa-times closeModel`}
            onClick={props?.toggleSideBar}
          ></i>
        </div>
        <div className="sideBar-Type">
          <p>Key Result Type</p>
          <p>What are you tracking?</p>
          <p>Target Date</p>
        </div>
      </div>
    </div>
  );
}
export default SideBarToggle;
