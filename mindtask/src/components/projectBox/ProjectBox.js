import React, { Component } from "react";
import "./ProjectBox.css";

class ProjectBox extends Component {
  render() {
    return (
      <div>
        <button className="project-box">
          <h3>{this.props.project.name}</h3>
          <p className="subtasks">
            <ul>
              <li>subtask 1</li>
              <li>subtask 2</li>
              <li>subtask 3</li>
            </ul>
          </p>

          <button className="finished">Finished</button>
        </button>
      </div>
    );
  }
}

export default ProjectBox;
