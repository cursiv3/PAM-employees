import React from "react";
import "./styles.css";

class DesktopView extends React.Component {
  render() {
    return (
      <div className="desktop-container">
        <table>
          <thead>
            <tr className="header-row">
              <td />
              <td>name</td>
              <td>department</td>
              <td>wage type</td>
              <td>email</td>
            </tr>
          </thead>
          <tbody>
            {this.props.json.map(val => {
              val.placeholder =
                "https://medizzy.com/_nuxt/img/user-placeholder.d2a3ff8.png";
              return (
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <img src={val.placeholder} alt="placeholder" />
                  </td>
                  <td>{`${val.name.first} ${val.name.last}`}</td>
                  <td>{val.department}</td>
                  <td>{val.roles[0]}</td>
                  <td>{val.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DesktopView;
