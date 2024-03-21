import React from 'react'

function Dash() {
  return (
    <div>
      <div className="notification">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="not">
          <img
            className="third-logo-admin"
            src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg"
            alt=""
            draggable="false"
          />
          <span className="">Admin</span>
          {/* <NotificationsNoneIcon /> */}
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <span className="workload">Workload</span>
          <h2>34.416</h2>
          <p>time of working per day</p>
        </div>

        <div className="card">
          <span className="facility">Facility</span>
          <h2>10.4p</h2>
          <p>number of treating patients</p>
        </div>

        <div className="card">
          <span className="facility">Salary</span>
          <h2>$20.4k</h2>
          <p>calculating the Salary per year</p>
        </div>
      </div>
    </div>
  );
}

export default Dash
