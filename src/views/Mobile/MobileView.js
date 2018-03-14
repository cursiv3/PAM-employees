import React from "react";
import "./styles.css";

const MobileView = props => {
  return (
    <div>
      {props.json.map(val => {
        let at = val.email.indexOf("@");
        let user = val.email.slice(0, at);
        let domain = val.email.slice(at + 1);

        return (
          <div className="mobile-card">
            <img src={val.placeholder} alt="placeholder" />
            <p>{`${val.name.first} ${val.name.last}`}</p>
            <hr />
            <p>
              <em>{val.department}</em>
            </p>
            <p>{val.roles[0]}</p>
            <p>
              <strong>
                {user}
                <br />@<br />
                {domain}
              </strong>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MobileView;
