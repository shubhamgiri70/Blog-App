import React from "react";
import { Link } from "react-router-dom";

function FeedNav(props) {
  return (
    <>
      <div className="feednav">
        <Link to="/">
          <h2
            onClick={props.removeTab}
            className={!props.activeTab ? "feednav-active" : ""}
          >
            Global Feed
          </h2>
        </Link>
        {props.activeTab && (
          <Link to={`/tag/${props.activeTab}`}>
            <h2 className="feednav-active"># {props.activeTab}</h2>
          </Link>
        )}
      </div>
      <hr />
    </>
  );
}

export default FeedNav;
