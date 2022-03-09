import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FiPercent } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { Editor } from "@tinymce/tinymce-react";
import { ImLocation } from "react-icons/im";

import "./SideBar.css";

function SideBarToggle(props) {
  return (
    <div>
      <div className="sideBar">
        <div className="sideBar-Header">
          <p>
            Objective: <strong>ABC</strong>
          </p>
          <i
            className={`fa fa-times closeModel`}
            onClick={props?.toggleSideBar}
          ></i>
        </div>
        <div className="sideBar-Type">
          <div className="sideBar-Type1">
            <div id="circle">
              <div id="circle2">
                <FiPercent id="percentSign" />
              </div>
            </div>
            <div className="key">
              <span className="span-key">Key Result Type</span>
              <Dropdown>
                <span className="percentage-track">Percentage Tracked</span>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="sideBar-Type2">
            <div id="circle">
              <FiPercent id="percentSign" />
            </div>
            <div className="key">
              <span className="span-key">What are you Tracking?</span>
              <span>Percentage Tracked</span>
            </div>
          </div>

          <div className="sideBar-Type3">
            <div id="circle">
              <GoCalendar id="calendarIcon" />
            </div>

            <div className="key">
              <span className="span-key">Target Date</span>
              <span>Jan 1-Jun 1</span>
            </div>
          </div>
        </div>
        <hr />

        <div className="key-result">
          <textarea
            cols={63}
            rows={3}
            placeholder="Type Your Key Result.."
            className="textareaKeyResult"
          ></textarea>
        </div>
        <div className="Editor">
          <Editor
            apiKey="h1a0ymnw0nixvy8bnuahlmmfo0422ltzxfsrv2gprc51cutm"
            init={{
              statusbar: false,
              placeholder: "Additional Context Here..",
              menubar: false,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic |   alignleft aligncenter alignright | \bullist numlist outdent indent | help",
            }}
          />
        </div>

        <div className="User">
          <div id="circleTag">
            <i className="fa fa-light fa-user" />
          </div>
          <div className="key">
            <span className="span-key">Assignee</span>
            <a href="#">Search & Select Assignee</a>
          </div>
        </div>
        <div className="tag">
          <div id="circleTag">
            <i className="fa fa-solid fa-tags">
              <span className="tooltiptext">Tags</span>
            </i>
          </div>
        </div>

        <div className="Location">
          <div id="circleLocation">
            <i className="fa fa-duotone fa-location-arrow">
              <span className="tooltiptext">Frequency</span>
            </i>
          </div>
          <div className="key">
            <span className="span-key">Check-in Frequency</span>
            <span className="display-frequency"> Every Friday</span>
          </div>
          <div id="circleAddFre">
            <i className="fa fa-solid fa-plus" />
          </div>
        </div>
        <Dropdown>
          <Dropdown.Toggle>Dropdown Button</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="btn">
          <button className="graph-btn">Cancel</button>
          <button className="graph-btn">Update</button>
        </div>
      </div>
    </div>
  );
}
export default SideBarToggle;
