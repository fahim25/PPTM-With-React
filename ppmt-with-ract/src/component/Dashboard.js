import React, { Component } from "react";
import CreateProjectButton from "./project/CreateProjectButton";
import ProjectItem from "./project/ProjectItem";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <!-- Dashboard Component (Project Item included) --> */}

        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <CreateProjectButton />
                <br />
                <hr />

                {/* Project Item */}
                <ProjectItem />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End of Dashboard Component --> */}
      </div>
    );
  }
}

export default Dashboard;
